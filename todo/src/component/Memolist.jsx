
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck as faCircleCheckSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MemolistBox = styled.ul`
    width: 100%;
`;

const Memolists = styled.li`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-bottom:1px solid #f0f0f0;
    padding: 25px;
    display: flex;
    flex-direction: row;
    transition: ease-in-out 0.3s;

    > div {display:flex;}
    > div:nth-child(2) {width:300px;}
    > div:nth-child(4) {width:30px; justify-content:center;}

    .check-box{font-size: 23px;}
    .off {color:#ddd;}
    .on{color:#b2cceb;}

    .memo-text{
        font-size: 14px;
        color: #8a8a8a;
        margin-left: 10px;
    }
    :hover {
        background-color: #f6f7f8;
    }
    .date-box>* {margin: 4px;}
    .date-box{
            width: 100px;
            justify-content: center;
            border: 1px solid #bdbdbd;
            background-color: #fbfbfb;
            border-radius: 5px;
            font-size: 11px;
            color: #adb0b8;
            transition: ease-in-out 0.3s;
        }

    .date-boxON{
        border-color: #7fabe1;
        background-color: #ecf3f9;
        color:#769de7;
        transition: ease-in-out 0.2s;
        }

    button{
        font-size: 12px;
        color: #ccc;
    }

`;

const Memoinput = styled.div`
    padding: 25px;
    display: flex;
    justify-content: center;
    align-content: center;

    > * { margin: 0px 10px;}

    .input-date{
        color:#ccc;
        width: 100px;
    }

    .input-text{
        width: 300px;
        height: 35px;
        border-radius: 10px;
        border:1px solid #e9e9e9;
        background-color: #fcfcfc;
        padding-left: 20px;
    }
    .input-text::placeholder{
        font-weight: 300;
        font-size: 12px;
        color: #ccc;
    }
    .submit-btn{
        width: 80px;
        height: 35px;
        border:1px solid #e9e9e9;
        background-color: #fff;
        border-radius: 10px;
        color:#b4b4b4;
        transition: ease-in-out 0.3s ;
    }

    .submit-btn:hover{
        border-color: #7fabe1;
        background-color: #ecf3f9;
        color:#769de7;
    }

    .date-icon{
        color: #ccc;
        height: 25px;
    }
`;



function Memolist({ el }) {

    const [memoData, setMemoData] = useState(el.memo)

    const [dateValue, setDateValue] = useState("")
    const [titleValue, setTitleValue] = useState("")


    const Datevalue = (e) => {
        let targetDate = e.target.value
        setDateValue(targetDate.slice(5))
    }

    const Titlevalue = (e) => {
        setTitleValue(e.target.value)
    }


    const hendleCheckBtn = (index) => {

        let copymemo = [...memoData]
        copymemo[index].complete = (!copymemo[index].complete)

        setMemoData(copymemo)
    }

    const hendleDeleteMemo = (index) => {
        let delMemo = []
        for(let i=0; i< memoData.length; i++){
            if (memoData[i] !== memoData[index]){
                delMemo.push(memoData[i])
            }
        };
        setMemoData(delMemo)
    }

    const hendleUploadData = (index) => {

        let Newmemo = {
            id: memoData.length,
            title : titleValue,
            date : dateValue,
            complete : false,
        }

        if(dateValue === '' || titleValue === ''){
            alert('날짜 혹은 할일을 입력하지 않았어요!')
        } else{
        setMemoData([...memoData,Newmemo])
        setDateValue("")
        setTitleValue("")
        console.log(el.memo)
        }
    }



    return (
        <MemolistBox>
            { memoData.map ((memo,index) => (
                <Memolists key={memo.id}>
                    <div>{(memo.complete) ? <FontAwesomeIcon className="check-box on" icon={faCircleCheckSolid} onClick={()=>{hendleCheckBtn(index)}} /> :
                        <FontAwesomeIcon className="check-box off" icon={faCircleCheck} onClick={()=>{hendleCheckBtn(index)}}/>}</div>
                    <div>
                        <span className="memo-text">{memo.title}</span>
                    </div>
                    <div className={`date-box ${(memo.complete) ? 'date-boxON' : null}`}>
                        <span><FontAwesomeIcon icon={faCalendarCheck} /></span>
                        <span>{memo.date} 까지</span>
                    </div>
                    <div><button onClick={()=>{hendleDeleteMemo(index)}}>×</button></div>
                </Memolists>
            ))}
            <Memoinput>
                <input type="date" className="input-date" onChange={Datevalue} value={dateValue}/>
                <input type="text" className="input-text" placeholder="오늘 할일을 입력하세요." onChange={Titlevalue} value={titleValue}></input>
                <button className="submit-btn" onClick={hendleUploadData}> 작성 </button>
            </Memoinput>



        </MemolistBox>
    );
}

export default Memolist;