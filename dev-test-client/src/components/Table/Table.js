import { useEffect } from 'react';
import * as S from './Table.styles';
import TableHeader from './TableHeader';
import axios from 'axios';

const Table = ({ trades }) => {

    //lo unico pendiente es la llamada con axios al api, no pude dar con el error del porque sigo recibiendo 404
    //luego de eso esta la logica para filtrar la tabla
    // la idea es poder filtrar por cualquier titulo side, size, etc
    useEffect(() => {
        ( async () => {
            try {
                for(let i = 0; i < trades.length;i++) {
    
                    await axios.post('http://10.0.0.4:3000/api/createRecord', {
                        price:  trades[i].data[0].price,
                        side:   trades[i].data[0].side, 
                        size:   trades[i].data[0].size,
                        symbol: trades[i].data[0].symbol,
                        timestamp: trades[i].data[0].timestamp
                    });
                }
                
            } catch (err) {
                console.log(err)
            }
        } )();
        
    }, [trades])
    return (
        <S.TableContainer>
            <TableHeader/>
            <S.TableBody>
                {trades.map((trade, index) => {
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

export default Table;