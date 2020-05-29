import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as yup from "yup";

const FormHeader = styled.h1`
    text-align: center;
`;

const Subheadings = styled.h2`
    font-size: 1.5rem;
    padding: 5% 0;
`;

const AlignedDropdownDiv = styled.div`
    text-align: center;
    padding: 5%;
`;

const AddArticleButton = styled.button`
    width: auto;
    height: auto;
    padding: 1% 6%;
`;

const formSchema = yup.object().shape({
    articleUrl: yup 
        .string()
        .required("A URL is required."),
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
    });

    const [buttonDisabled, setButtonDisabled] = useState(true); 
    useEffect(() => {
        formSchema.isValid(formState)
            .then(valid => {
                setButtonDisabled(!valid);
            });
    }, [formState]);

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
            <FormHeader>Add your articles here.</FormHeader>
            <form onSubmit={formSubmit}>
                <label htmlFor="articleUrl">
                <Subheadings>Article URL:</Subheadings>
                <input
                    type="text"
                    name="articleUrl"
                    id="articleUrl"
                    value={formState.articleUrl}
                    onChange={inputChange}
                />
                {errorState.articleUrl.length > 0 ? (
                    <p>{errorState.articleUrl}</p>
                ) : null}
                </label>

                <AlignedDropdownDiv>
                <label htmlFor="category">
                <Subheadings>Article Category:</Subheadings>
                <select
                    name="category"
                    id="category"
                    value={formState.category}
                    onChange={inputChange}
                >
                    <option value="Category: Education">Education</option>
                    <option value="Category: Recreation">Recreation</option>
                    <option value="Category: Cooking">Cooking</option>
                    <option value="Category: Shopping">Shopping</option>
                    <option value="Category: Technology">Technology</option>
                    <option value="Category: Entertainment">Entertainment</option>
                    <option value="Category: Professional">Professional</option>
                    <option value="Category: Health">Health</option>
                    <option value="Category: Sports">Sports</option>
                    <option value="Category: Other">Other</option>
                </select>
                </label>
                </AlignedDropdownDiv>
                
                <AddArticleButton disabled={buttonDisabled}>Add Article</AddArticleButton>
            </form>
        </div>
    );
};

export default AddArticle;