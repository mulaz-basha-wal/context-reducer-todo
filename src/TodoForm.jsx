import { useContext } from "react";
import TodosContext from "./TodosContext";
import { useFormik } from "formik";

export default function TodoForm() {
    const { dispatch } = useContext(TodosContext);

    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
        },
        onSubmit(values) {
            dispatch({
                type: "add",
                todo: {
                    key: Date.now(),
                    title: values.title,
                    desc: values.desc,
                },
            });
        },
        validate() {
            const errors = {};
            if (formik.values.desc.length < 10) {
                errors.desc = "Description should be atleast 10 chars";
            }
            if (formik.values.title.length < 4) {
                errors.title = "Title should be atleast 4 chars";
            }
            return errors;
        },
    });

    const clearTodos = () => {
        dispatch({ type: "clear" });
    };

    return (
        <div className="todoForm">
            <form onSubmit={formik.handleSubmit} noValidate>
                <div>
                    <input
                        type="text"
                        name="title"
                        className="todoItemInput"
                        placeholder="Todo Title"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <p className="validationError">
                        {formik.errors.title ? formik.errors.title : null}
                    </p>
                </div>
                <div>
                    <textarea
                        className="todoItemDescription"
                        placeholder="Please describe your todo..."
                        name="desc"
                        value={formik.values.desc}
                        onChange={formik.handleChange}
                    />
                    <p className="validationError">
                        {formik.errors.desc ? formik.errors.desc : null}
                    </p>
                </div>
                <div className="todoFormButtons">
                    <button
                        type="button"
                        className="clearAll"
                        onClick={clearTodos}
                    >
                        Clear All
                    </button>
                    <button type="submit" value={"Submit"} className="addItem">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
