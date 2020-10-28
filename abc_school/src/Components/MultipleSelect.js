import React from 'react';
// import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tch_cls = [
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ];

function getStyles(name, tchClass, theme) {
  return {
    fontWeight:
      tchClass.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


//   handleChange = (event) => {
//     const { options } = event.target;
//     const value = [];
//      for (let i = 0, l = options.length; i < l; i += 1) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//     settchClass(value);
  // };

//   <script>
//  var sel = document.querySelector('select[multiple]');
//     sel.addEventListener("change", function(){
//      var array = [];
//      for(var i = 0; i < sel.length; i++){
//          var opt = sel.options[i]
//             if(opt.selected){
//              array.push(opt.value || opt.text);
//             }
//         }
//      document.querySelector('h1').innerHTML = array
//     });
// </script>

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [tchClass, settchClass] = React.useState([]);

  /*const handleChange = (event) => {    
  };*/

  const handleChangeMultiple = (event) => {
    var { options } = event.target;
    console.log(options);
    var value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected){
        value.push(options[i].value);
      }
    }
    settchClass(value);
  };

 
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={tchClass}
          onChange={handleChangeMultiple}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {tch_cls.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, tchClass, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={tchClass}
          onChange={handleChangeMultiple}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {tch_cls.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, tchClass, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={tchClass}
          onChange={handleChangeMultiple}
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {tch_cls.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}