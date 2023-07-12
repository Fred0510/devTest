import * as S from './TableHader.styles';

const TableHeader = () => {
    return (
        <S.TableHeaderContainer>
            <S.TableHeaderSections>
                Price
            </S.TableHeaderSections>
            <S.TableHeaderDivide />
            <S.TableHeaderSections>
                Side
            </S.TableHeaderSections>
            <S.TableHeaderDivide />
            <S.TableHeaderSections>
                Size
            </S.TableHeaderSections>
            <S.TableHeaderDivide />
            <S.TableHeaderSections>
                Symbol
            </S.TableHeaderSections>
            <S.TableHeaderDivide />
            <S.TableHeaderSections>
                Time
            </S.TableHeaderSections>
        </S.TableHeaderContainer>
    )
}
export default TableHeader;