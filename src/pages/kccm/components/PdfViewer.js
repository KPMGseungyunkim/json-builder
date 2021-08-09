import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styled from "styled-components";
import * as Api from '../Api';
import sampleFile from '../resources/sample_kpmg.pdf';

const StyledContainer = styled.div`
    .pagination{
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-self: center;
        align-items: center;
        width: 100%;
    }
    .prev-btn{
        margin-right: .5rem;
    }
    .next-btn{
        margin-left: .5rem;
    }
`;


export default function PdfViewer({ pdfUrl }){
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);  

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    var file;
    if(pdfUrl===''){
        file = sampleFile
    }
    else{
        file = Api.getFilePdfApi + pdfUrl;
    }

    return (
        <StyledContainer>
            <Document
                file={file} 
                // file={Api.getFilePdfApi + pdfUrl} 
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            
            <div className="pagination">
                <Button className="prev-btn"><span onClick={() => pageNumber > 1 ? setPageNumber(pageNumber - 1) : null}><ChevronLeftIcon/></span></Button>
                <span> Page {pageNumber} of {numPages} </span>
                <Button className="next-btn"><span color="primary" onClick={() => pageNumber < numPages ? setPageNumber(pageNumber + 1) : null}><ChevronRightIcon/></span></Button>
            </div>
        </StyledContainer>
    );
}
