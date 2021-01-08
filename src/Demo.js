import React from 'react'
import imp, { getCheckboxes } from './imp'

import checkboxes, {} from "./components/checkboxes";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";


// FORM

const useStyles1 = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function SimpleSelect() {
    const classes = useStyles1();
    const [age, setAge] = React.useState('ciao');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

//TAB VERTICALE

TabPanel2.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps2(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles2 = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

function VerticalTabs(props) {

    const checkbox1 = getCheckboxes('checkboxprova')
    const [checked, setChecked] = React.useState(true);

    const classes = useStyles2();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} {...props}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Item One" {...a11yProps2(0)} />
                <Tab label="Item Two" {...a11yProps2(1)} />
                <Tab label="Item Three" {...a11yProps2(2)} />
            </Tabs>
            <TabPanel2 value={value} index={0}>

                <imp.checkboxes id='checkboxprova' typeInput={1} checkLimit={ true }
                                colorStart='yellow' colorEnd='white' opacityNotCheck='1'
                                opacityCheck='2' timeAnimation='0s' typeAnimFillMode='both' {...props}>

                    <label>
                        <input type="checkbox"
                               checked={!checked}
                               onChange={() => setChecked(!checked)}
                               onClick={() => { checkbox1.setCheckLimit(!checked) }}
                        />
                        Checkbox
                    </label>

                </imp.checkboxes>

            </TabPanel2>
            <TabPanel2 value={value} index={1}>
                Item Two
            </TabPanel2>
            <TabPanel2 value={value} index={2}>
                Item Three
            </TabPanel2>
        </div>
    );
}

function TabPanel2(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

// DEMO

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Demo(props) {

    const checkbox1 = getCheckboxes('checkboxprova')
    const checkbox2 = getCheckboxes('checkboxprova2')
    const checkbox3 = getCheckboxes('checkboxprova3')

    const [checked, setChecked] = React.useState(true);
    const [checked1, setChecked1] = React.useState(true);
    const [checked2, setChecked2] = React.useState(true);


    const tmp = {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)'
    }

    const demoHeaderConst = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)'
    }

    const demoTabPanel = {
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        /*        <div className="Demo" style={{textAlign: 'center'}}>
                <header className="Demo-header" style={ tmp }>

                    <div className="Checkboxes">

{/!*                        <imp.checkboxes id='checkboxprova' typeInput={1} checkLimit={ true }
                                        colorStart='yellow' colorEnd='white' opacityNotCheck='1'
                                        opacityCheck='2' timeAnimation='0s' typeAnimFillMode='both' {...props}>

                            <label>
                                <input type="checkbox"
                                       checked={!checked}
                                       onChange={() => setChecked(!checked)}
                                       onClick={() => { checkbox1.setCheckLimit(!checked) }}
                                />
                                Checkbox
                            </label>

                        </imp.checkboxes>*!/}

{/!*
                       <imp.checkboxes id='checkboxprova2' typeInput={2} checkLimit={ true }
                                       colorStart='yellow' colorEnd='white' opacityNotCheck='1'
                                       opacityCheck='2' timeAnimation='4s' typeAnimFillMode='both' transition='' {...props}>

                            <label>
                                <input type="checkbox"
                                       checked={!checked1}
                                       onChange={() => setChecked1(!checked1)}
                                       onClick={() => { checkbox2.setCheckLimit(!checked1) }}
                                />
                                Checkbox
                            </label>

                        </imp.checkboxes>*!/}

{/!*                       <imp.checkboxes id='checkboxprova3' typeInput={3} checkLimit={ true } textInput='Checkbox off'
                                       colorStart='yellow' colorEnd='white' opacityNotCheck='1'
                                       opacityCheck='2' timeAnimation='0s' typeAnimFillMode='both' {...props}>

                            <label>
                                <input type="checkbox"
                                       checked={!checked2}
                                       onChange={() => setChecked2(!checked2)}
                                       onClick={() => { checkbox3.setTextValue(!checked2, 'Checkbox on'); checkbox3.setCheckLimit(!checked2);}}
                                />
                                { getCheckboxes('checkboxprova3').textValue }
                            </label>

                        </imp.checkboxes>*!/}

                    </div>
                </header>
        </div>*/


        <div className={classes.root} {...props}>
            <AppBar position="static" style={ demoHeaderConst } {...props}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Checkbox" {...a11yProps(0)}/>
                    <Tab label="Item One" {...a11yProps(1)}/>
                    <Tab label="Item One" {...a11yProps(2)}/>
                </Tabs>
            </AppBar>

            <TabPanel index={0} value={value} style={ demoTabPanel } {...props}>

                    <VerticalTabs {...props}/>

            </TabPanel>
            <TabPanel index={1} value={value} style={ demoTabPanel }>
                Item Two
            </TabPanel>
            <TabPanel index={2} value={value} style={ demoTabPanel }>
                Item Three
            </TabPanel>

        </div>

    )

}

export default Demo
