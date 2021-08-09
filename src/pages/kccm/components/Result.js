import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import sampleData from '../resources/sample_task.json';
import * as api from './Api';

const useStyles = makeStyles((theme) => ({
    table: {
      backgroundColor: theme.palette.background.paper,
    },
  }));



export default function Result() {
    // const [files, setFiles] = useState([]);
    // const [fileNames, setFileNames] = useState([]);
    // const [fileStatus, setFileStatues] = useState({});
    // const [uploadStatus, setUploadStatus] = useState(false);
    // const [progress, setProgress] = useState({});
    // 여기에 결과값 들어오기 
    const [rows, setRows] = useState([
        {key:"key1", value:"value1"},
        {key:"key2", value:"value2"},
        {key:"key3", value:"value3"},
    ]);
    // const [uploadBtnDisabled, setUploadBtnDisabled] = useState(false);
    const [executeBtnDisabled, setExecuteBtnDisabled] = useState(false);
    // const [numPages, setNumPages] = useState(1);
    const [filePath, setFilePath] = useState("");
    const [table, setTables] = useState([]);
    // const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();

    const executePipeline = () => {
        setExecuteBtnDisabled(true);

        const dd = [];
        sampleData['file_path'] = filePath;
        console.log('file_path : ', sampleData);

        api.executePipeline(sampleData).then(response => {
            this.setState({
                files: [],
                upload_status: false
            })


            const resultList = response['data']['result']
            console.log(resultList);
            resultList.map((row, i) => {
                const r = row;
                const a = r[r.length - 1];
                console.log(r.length);
                console.log(sampleData['tasks'][i]['name']);
                console.log(a['answer']);

                dd.push({
                    'key': sampleData['tasks'][i]['name'],
                    'value': a['answer']
                });

                return true;
            });

            setTables(dd);

            console.log(filePath);
        });
    }
    return (
        <div>
            <Button variant='outlined' color='primary' disabled={executeBtnDisabled} onClick={() => executePipeline()}>Execute</Button>
            <TableContainer className={classes.table}>
                <Table aria-label="collapsible table">
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell />
                                <TableCell>{row.key}</TableCell>
                                <TableCell>{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

