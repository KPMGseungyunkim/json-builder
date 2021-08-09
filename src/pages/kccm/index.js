import React, { useEffect } from 'react';
import styled from "styled-components";
import DocumentList from './components/DocumentList';
import PdfViewer from './components/PdfViewer';
import ResultTable from './components/ResultTable';
import * as Api from './Api';
import $ from 'jquery';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledColumn = styled.div`
    width: ${props => `${props.xs}rem`};
`;

export default function Kccm() {
    const [documents, setDocuments] = React.useState([]);
    const [resultList, setResultList] = React.useState();
    const [pdfUrl, setPdfUrl] = React.useState('');

    useEffect(() => {
        $.ajax({
            method: "GET",
            url: `${Api.baseUrl + Api.getFileListApi}`
        })
        .done(function( res ) {
            setDocuments(res);
        });
    },[]);

    const columns = [
        { title: "Document List", xs: 16, contents: <DocumentList documents={documents} setResultList={setResultList} setPdfUrl={setPdfUrl}/> },
        { title: "Result", xs: 40, contents: <ResultTable resultList={resultList}/> },
        { title: "PDF Viewer", xs: 40, contents: <PdfViewer pdfUrl={pdfUrl}/> },
    ];

    return (
        <StyledContainer>
            {columns.map((col, i) => (
                <StyledColumn key={i} xs={col.xs}>
                    {col.contents}
                </StyledColumn>
            ))}
        </StyledContainer>
    );
}