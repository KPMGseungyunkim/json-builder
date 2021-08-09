// import { Box, Button, ExpansionPanel, Grid, Typography } from '@material-ui/core';
// import { blue } from '@material-ui/core/colors';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import { withStyles } from '@material-ui/core/styles';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import clsx from 'clsx';
// import 'filepond/dist/filepond.min.css';
// import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
// import * as api from './components/Api';
// import sampleData from '../common/sample_task';
// import '../styles/Management.css';

// // We can inject some CSS into the DOM.
// const styles = {
//   uploadBtn: {
//     marginBottom: '20px',
//   },
//   documentListHeader: {
//     marginBottom: '20px',
//     marginTop: '20px'
//   },
//   buttonProgress: {
//     color: blue[800],
//     position: 'absolute',
//     marginTop: 7,
//     marginLeft: -55,
//   },
//   heading: {
//     fontWeight: 'bold',
//     fontSize: '20px',
//     flexBasis: '30%',
//     marginRight: '20px',
//     flexShrink: 0,
//   },
//   secondaryHeading: {
//     fontSize: '15px',
//     flexBasis: '70%',
//     marginRight: '20px',
//     //color: theme.palette.text.secondary,
//   },
//   context: {
//     //fontSize: theme.typography.pxToRem(15),
//   },
//   ExpansionPanelDetails : {
//       height : 350
//   }

// };

// class Management extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       files: [],
//       file_names : [],
//       file_status : {},
//       upload_status : false,
//       progress : {},
//       rows : [],
//       uploadBtnDisabled: true,
//       executeBtnDisabled: false,
//       numPages: null,
//       pageNumber: 1,
//       file_path : "",
//       table : [],
//       expanded : false
//     }
//     this.props = props;
//   }

  

//   clickUploadBtn() {
//     alert("파일이 업로드 중입니다.");
//     this.setState({
//       upload_status : true
//     });

//     const fileList = [];
//     this.state.files.map(file => fileList.push(file));

//     api.convertUploadFile(fileList).then(response => {
//       this.setState({
//         files: [],
//         upload_status : false,
//         file_path : response['data']
//       });
     
//       console.log(response)
//       console.log(this.state.file_path)
//       alert("파일 업로드가 완료되었습니다.");
//     });    
//   }

//   execute_pipeline = () => {
//     this.setState({
//       executeBtnDisabled : true
//     });


//     const dd = []
//     sampleData['file_path'] = this.state.file_path
//     console.log('file_path',sampleData)

//     api.executePipeline(sampleData).then(response => {
//       this.setState({
//         files: [],
//         upload_status : false
//       })
     

//       const resultList = response['data']['result']
//       console.log(resultList);
//       resultList.map((row , i) => {
//         const r = row;
//         const a = r[r.length - 1];
//         console.log(r.length);
//         console.log(sampleData['tasks'][i]['name']);
//         console.log(a['answer']);
  
//         dd.push({
//           'key': sampleData['tasks'][i]['name'],
//           'value': a['answer']
//         });

//         return true;
//       });

//       this.setState({
//         table : dd
//       })

//       console.log(this.state.file_path)
//     });
//   }

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }

//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <Box>
//           <Typography className={clsx(classes.documentListHeader)} variant="h5" noWrap>
//             Documents List
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <Document
//                 file={this.state.file_path}
//               >
//               <Page pageNumber={this.state.pageNumber} />
//               </Document>
//             </Grid>
//             <Grid item xs={6}>
//             <Button className={clsx(classes.uploadBtn)} variant='outlined' color='primary' disabled={this.state.executeBtnDisabled} onClick={() => this.execute_pipeline()}>Execute</Button>
//             {this.state.table.map((row, i) =>(
//               <ExpansionPanel expanded={this.state.expanded === `${i}` } >
//                 <ExpansionPanelSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls={i}
//                   id={i}
//                 >
//                 <Typography className={classes.heading}>{row.key}</Typography>
//                 <Typography className={classes.secondaryHeading}>{row.value}</Typography>
//                 {/*<Typography className={classes.context}>{row.context}</Typography>*/}
//                 </ExpansionPanelSummary>

//                 <ExpansionPanelDetails>
//                 {/*<DocumentInfoTable 
//                       rows={props.rank[i]}
//                 />*/}
//                     {/*<Button ref={button} variant="contained" color="primary" size="small" onClick ={e => props.answer.current.focus()}>{"Answer"}</Button> */}
//                 </ExpansionPanelDetails>
//               </ExpansionPanel>
//             ))}
//             </Grid> 
//           </Grid>
//         </Box>
//       </div>
//     )
//   }
// }

// export default withStyles(styles)(Management);
