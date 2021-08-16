import '../styles/AddSongs.css'
import { FormControl ,InputLabel,Input,FormHelperText,Button} from '@material-ui/core';
import * as ActionsType from '../Redux/ActionsType'
import store from '../Redux/store';

function AddSongs(){
    var img;
    var title="";
    var description="";
    var price=0;
    var sold=0;
    function addClick(){
        store.dispatch({
            type : ActionsType.ADD_SONGS,
            payload : {
                img:img,
                title : title,
                description:description,
                price:price,
                sold:sold
            }
        })
        console.log(title+"\n"+description+"\n"+price+"\n"+sold+"\n"+img)
    }
    return(
        <div className="formContainer">
            <FormControl className="frm">
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input id="my-input" onChange={(e)=>title=e.target.value} aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">You'll never update the titile of your song.</FormHelperText>
            </FormControl>


            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file" onChange={
                    (e)=>img=URL.createObjectURL(e.target.files[0])
                }
             />
            <label htmlFor="raised-button-file">
                <Button className="frm" 
                    component="span" >
                    Upload Song Image
                </Button>
            </label> 


            <FormControl className="frm">
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input id="my-input" onChange={(e)=>description=e.target.value} aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Enter the name of the singer and some details about the song</FormHelperText>
            </FormControl>
            <FormControl className="frm">
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input id="my-input" onChange={(e)=>price=e.target.value} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl className="frm">
                <InputLabel htmlFor="my-input">Sold</InputLabel>
                <Input id="my-input" onChange={(e)=>sold=e.target.value} aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">how many times this song get sold (enter 0)</FormHelperText>
            </FormControl>
            <Button onClick={addClick} variant="contained" color="primary">Add song</Button>
        </div>
    )
}
export default AddSongs