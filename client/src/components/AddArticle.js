import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";

const formSchema = yup.object().shape({
    articleUrl: yup 
        .string()
        .required("An article URL is required."),
    category: yup
        .string()
        .required("An article category is required.")
});

const AddArticle = () => {

    const [formState, setFormState] = useState({
        articleUrl: "",
        category: ""
    });

    const [errorState, setErrorState] = useState({
        articleUrl: "",
        category: "",
    })

    const clearForm = () => {
        setFormState({ 
            articleUrl: "",
            category: "",
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
        clearForm();
    };

    return (
        <div>
            <h2>Add articles here.</h2>
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
                {errorState.name.length > 0 ? (
                    <p className="error">{errorState.articleUrl}</p>
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
                    <option value="1">Ecucation</option>
                    <option value="2">Recreation</option>
                    <option value="3">Cooking</option>
                    <option value="4">Shopping</option>
                    <option value="5">Technology</option>
                    <option value="6">Entertainment</option>
                    <option value="7">Professional</option>
                    <option value="8">Health</option>
                    <option value="9">Sports</option>
                    <option value="10">Other</option>
                </select>
                </label>
                    
                <button>Add Article</button>
            </form>
        </div>
    );
};
// note pw = password
export default AddArticle;