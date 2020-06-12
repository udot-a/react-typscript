import React from "react";
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory();

    return (
        <div className={"about"}>
            <h1>{"Страница информации:"}</h1>

            <p>
                {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur dolor doloribus eligendi enim eos est,
                    fugit hic id in minus mollitia neque quod, repudiandae tempora temporibus velit veritatis? Facilis?`}
            </p>

            <button
                className={"btn"}
                onClick={() => history.push("/")}
            >
                {"Обратно к списку дел"}
            </button>
        </div>

    );
}