import { useEffect, useState } from 'react';
import * as S from './Table.styles';
import TableHeader from './TableHeader';
import axios from 'axios';

const FilteredTable = ({ Filteredtrades }) => {

    const [newFilteredtrades, setNewFilteredtrades] = useState([]);

    useEffect(() => {
        ( async () => {
            try {
                for(let i = 0; i < Filteredtrades.length;i++) {
    
                    const response = await axios.post('http://10.0.0.4:3000/api/filterRecords');

                    setNewFilteredtrades([...response])
                }
                
            } catch (err) {
                console.log(err)
            }
        } )();
        
    }, [Filteredtrades]);

    return (
        <S.TableContainer>
            <TableHeader/>
            <S.TableBody>
                {newFilteredtrades.map((trade, index) => {
                    const { data } = trade;
                    return (
                        <S.TableData key={index}>
                            <S.TableItem>
                                {data[0].price}
                            </S.TableItem>
                            <S.TableItem>
                                {data[0].side}
                            </S.TableItem>
                            <S.TableItem>
                                {data[0].size}
                            </S.TableItem>
                            <S.TableItem>
                                {data[0].symbol}
                            </S.TableItem>
                            <S.TableItem>
                                {data[0].timestamp}
                            </S.TableItem>
                        </S.TableData>
                    )
                })}
                
            </S.TableBody>
        </S.TableContainer>
    )
};

export default FilteredTable;