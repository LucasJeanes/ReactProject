import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewItemForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef(); // Added for price
  const categoryInputRef = useRef(); // Added for category
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const itemData = {
      itemId: enteredTitle, // Using title as unique ID for now
      title: enteredTitle,
      image: enteredImage,
      price: +enteredPrice, // Convert price to a number
      category: enteredCategory,
      description: enteredDescription,
    };

    props.onAddMeetup(itemData); // Calls the parent function
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Item Name (must be unique: it's the item ID)</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Item Image URL</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='price'>Price</label>
          <input type='number' required id='price' ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='category'>Category</label>
          <input type='text' required id='category' ref={categoryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Item</button>
        </div>
      </form>
    </Card>
  );
}

export default NewItemForm;
