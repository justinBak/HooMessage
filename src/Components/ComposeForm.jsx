import {useState} from 'react';
import Avatar from "./Avatar";
import '../resources/css/ComposeForm.css';
import {database} from '../config/firebase';
import {nanoid} from 'nanoid';
import moment from 'moment';

//Posts a new Tweet
function ComposeForm({onSubmit}) {

  // UseState() returns the getter and setter within an array
  const [editorValue, setEditorValue] = useState('')
  //     ^[getter,     ^setter]           ^initial value starts as an empty string

  //Used to test that the onChange event is being triggered everytime a user types in the compose form
  console.log(editorValue);

  // Handles the onChange event of the textarea and updates the state variable
  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value)
  }

  const handleSubmit = (e) => {
    // Gives a unique id, so firebase will retrieve and store each composed message 
    // in its Realtime Database 
    const form = {
      id: nanoid(),
      hooMessage: editorValue,
      time: moment(Date()).fromNow()
    };

    // Prevents the default behavior of the form submission, which normally triggers a page reload
    e.preventDefault();
    
    // Pushes the text input from the compose form to firebase when the user submits the message
    database.push(form);
    // Calls the onSubmit function with the latest textarea value
    onSubmit(editorValue);

    // Resets the textarea content, so the user can write another tweet
    setEditorValue('');
  }

  return(
    // handleSubmit is triggered everytime you submit the form
    // The from is handled by the handlePostTweet() fucntion inside the App Component
    <form className="compose-form" onSubmit={handleSubmit}>
      <div className="compose-form-container">
        <Avatar/>
        <textarea
          value={editorValue}
          // onChange re-renders the component and updates it using the handleEditorValueChange function
          onChange={handleEditorValueChange} 
          className="compose-form-textarea" 
          placeholder="What's happening?"
        />
      </div>
      <button className="compose-form-submit">Send</button>
    </form>
  )
}

export default ComposeForm;