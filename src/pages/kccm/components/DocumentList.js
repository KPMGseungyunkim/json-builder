import React from 'react';
import styled from "styled-components";
import DescriptionIcon from '@material-ui/icons/Description';
import $ from 'jquery';
import * as Api from '../Api'; 

// const documents = [
//     { name: "sample1.pdf", path: "path1", url: "" },
//     { name: "sample2.pdf", path: "path2", url: "" },
//     { name: "sample3.pdf", path: "path3", url: "" },
//     { name: "sample4.pdf", path: "path4", url: "" },
//     { name: "sample5.pdf", path: "path5", url: "" },
//     { name: "sample6.pdf", path: "path6", url: "" },
//     { name: "sample7.pdf", path: "path7", url: "" },
//     { name: "sample8.pdf", path: "path8", url: "" },
//     { name: "sample9.pdf", path: "path9", url: "" },
//     { name: "sample10.pdf", path: "path10", url: "" },
//     { name: "sample11.pdf", path: "path11", url: "" },
//     { name: "sample12.pdf", path: "path12", url: "" },
//     { name: "sample13.pdf", path: "path13", url: "" },
//     { name: "sample14.pdf", path: "path14", url: "" },
//     { name: "sample15.pdf", path: "path15", url: "" },
//     { name: "sample16.pdf", path: "path16", url: "" },
//     { name: "sample17.pdf", path: "path17", url: "" },
//     { name: "sample18.pdf", path: "path18", url: "" },
//     { name: "sample19.pdf", path: "path19", url: "" },
// ];

const StyledContainer = styled.div`
    width: 100%;
    position: relative;
    background-color: rgba(0,0,0,.05);
    border-right: 1.5px solid rgba(0,0,0,.05);
    .list-header{
        position: relative;
        color: #00338d;
    }
    .list-items{
        height: 51rem;
        overflow-y: auto;
    }
    .list-item{
        cursor: pointer;
        border-bottom: 1px solid rgba(0,0,0,.04);
        .list-item-icon{
            color: rgba(0,0,0,.5);
        }
        &:hover{
            background-color: rgba(0,0,0,.1);
        }
        &:active{
            background-color: rgba(0,0,0,.1);   
        }
    }
`;


export default function DocumentList({ documents, setResultList, setPdfUrl }) {

    const postDocTitle = (file) => {  
        setPdfUrl(file.url);
        $.ajax({
            method: "GET",
            url: `${Api.baseUrl + Api.getFileApi + file.name}`
        })
        .done(function( res ) {
            setResultList(res);
        });
    }


    return (
        <StyledContainer>
            <div className="list-header border-bottom">
                <h5 className="ml-4 py-3">Document List</h5>
            </div>
            <div className="list-items">
            {documents.map((d,i) => (
                <div className="px-4 py-3 list-item" key={i} onClick={() => postDocTitle(d)}>
                    <span className="list-item-icon"><DescriptionIcon /></span>
                    <span className="ml-4">{d.name}</span>
                </div>
            ))}
            </div>
        </StyledContainer>
    );
}