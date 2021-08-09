import React from 'react';
import styled from "styled-components";


const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-right: 1.5px solid rgba(0,0,0,.05);
    .header{
        position: relative;
        background-color: white;
        color: #00338d;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .table-container{
        height: 38rem;
        overflow-y: auto;
    }
    .key-col{
        width: 15rem;
    }
`;



export default function ResultTable({ resultList }) {
    var rows = [];
    if(resultList){
        Object.keys(resultList).forEach(k => {
            var newEntry = { key: k, value: resultList[k] };
            rows.push(newEntry);
        });
    }

    return (
        <StyledContainer>
            <div className="header  pr-4 border-bottom">
                <h5 className="ml-4 py-3">Execute Result</h5>
            </div>
            <div className="px-4 py-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </div>
            <div className="table-container">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col" className="key-col">Key</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i}>
                                <td>{row.key}</td>
                                <td>{row.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </StyledContainer>
    );
}