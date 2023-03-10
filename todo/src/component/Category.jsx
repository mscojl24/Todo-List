import Memolist from './Memolist.jsx'
import styled from "styled-components"
const { data } = require('./dummydata.jsx')

const CategoryGroup = styled.ul`
    width: 100%;
`
const CategoryList = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 130px;
    /* height: 139px; */
    border-radius: 15px;
    background-color: #fff;
    overflow: hidden;
    margin: 20px 0px;
    transition: ease-in-out 0.2s;
    
    :hover {
        box-shadow: 0px 0px 20px rgb(0,0,0,0.2);
    }

    >section{
        padding: 25px;
        border-bottom: 1px solid #dbdbdb;
        transition: ease-in-out 0.3s;
    }

    article {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        >*{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }

    .img-box-background {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        background-color: #dcdcdf;
        border-radius: 10px;
    }

    aside {
        width: 100%;
        height: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }

`;



const MainContentsGroup = styled.div`
    width: 290px;
    padding: 0px 15px;
    flex-direction: column;
    

    >div {
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 100%;
    }
    .title-text{
        font-size: 21px;
        color: #6f6f6f;
    }
    .subtitle-text{
        width: 100%;
        text-align: left;
        font-size: 12px;
        color: #a7a7a7;
    }
    .list-num {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 15px;
        height: 15px;
        border: 1px solid #7fabe1;
        background-color: #ecf3f9;
        font-size: 9px;
        border-radius: 3px;
        color:#6594bf;
        padding: 0px 3px;
        margin-left: 10px;
    }
`;

const SideContentsGroup = styled.div`
    width: 100px;
    position: relative;

    .side-top-DelDate{
        position: absolute;
        top:0;
        right: 0;
        display: flex;
        flex-direction: row;
    }
    .side-bottom-Progress{
        position: absolute;
        bottom:0;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 25px;
        border-radius: 30px;
        border: 1px solid #e0e0e0;
        background-color: #fff;
        font-size: 12px;
        color: #c8c8c8;
        transition: ease-in-out 0.3s;
    }

    .complete{
        border-color:#7fabe1;
        background-color: #ecf3f9;
        color: #97b8e2;
    }
    .new-date{
        font-size: 14px;
        color: #a7a7a7;
        width: 40px;
    }
`;


const GaugeBar = styled.div`

    width: 100%;
    height: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    background-color: #f4f4f4;
    overflow: hidden;

    > .gauge {
        transition: ease-in-out 0.3s;
        width: 70%;
        height: 8px;
        background-color: #96ade7;
    }
`;



function Category() {


    return (
        <CategoryGroup>
            { data.map (el => (
            <CategoryList key={el.id}>
                <section>
                <article>
                    <div>
                        <div className="img-box-background"><img src={`${el.icon}`} /></div>
                    </div>
                    <MainContentsGroup>
                        <div>
                            <h2 className="title-text">{el.category}</h2>
                            <h6 className="list-num">{el.memo.length}</h6>
                        </div>
                        <span className="subtitle-text">{el.subtext}</span>
                    </MainContentsGroup>
                    <SideContentsGroup>
                        <span className="side-top-DelDate">
                            <p className="new-date">{el.date}</p>
                            <img src="./img/icon00.png" /></span>
                        <span className={`side-bottom-Progress ${(el.Progress) ? "complete" : null}`}>{(el.Progress) ? '미션완료' : '진행중'}</span>
                    </SideContentsGroup>
                </article>
                <aside>
                    <GaugeBar>
                        <div className="gauge"></div>
                    </GaugeBar>
                </aside>
                </section>
                <Memolist el={el} />

            </CategoryList>
            ))}

        </CategoryGroup>
    );
}

export default Category;
