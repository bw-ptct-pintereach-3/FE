import React, { useState } from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
    articleUrl: yup 
        .string()
        .required("An article URL is required."),
    category: yup
        .string()
        .required("An article category is required.")
});

const AddArticle = (props) => {

    const [formState, setFormState] = useState({
        articleUrl: "",
        category: ""
    });

    const [errorState, setErrorState] = useState({
        articleUrl: "",
        category: ""
    })

    const clearForm = () => {
        setFormState({ 
            articleUrl: "",
            category: ""
        });
    };

    const validate = e => {
        let value = e.target.value
        yup 
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            });
    };

    const inputChange = e => {
        e.persist();
        validate(e);
        let value = e.target.value
        setFormState({
            ...formState, 
            [e.target.name]: value
        });
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted");
        props.handleFormSubmission(formState);
        clearForm();
    };

    return (
        <div>
            <h2>Make a to-read list.</h2>
            <form onSubmit={formSubmit}>

                <label htmlFor="articleUrl">
                Article URL: 
                <input
                    type="text"
                    name="articleUrl"
                    id="articleUrl"
                    value={formState.articleUrl}
                    onChange={inputChange}
                />
                {errorState.length > 0 ? (
                    <p>{errorState.articleUrl}</p>
                ) : null}
                </label>

                <label htmlFor="category">
                Please choose a category.
                <select
                    name="category"
                    id="category"
                    value={formState.category}
                    onChange={inputChange}
                >
                    <option value="Education">Education</option>
                    <option value="Recreation">Recreation</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Technology">Technology</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Professional">Professional</option>
                    <option value="Health">Health</option>
                    <option value="Sports">Sports</option>
                    <option value="Other">Other</option>
                </select>
                </label>
                    
                <button>Add to Your To-read List</button>
            </form>
        </div>
    );
};

export default AddArticle;