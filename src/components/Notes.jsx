import React, { useState, useEffect } from "react";
import "./styles/Notes.css";
import test from '../images/notes.png';

const Notes = () => {
    const [isNoteOpen, setIsNoteOpen] = useState(false);
    const [noteContent, setNoteContent] = useState("");

    useEffect(() => {
        // Charger le contenu du bloc-note depuis le stockage local
        const storedNoteContent = localStorage.getItem("noteContent");
        if (storedNoteContent) {
            setNoteContent(storedNoteContent);
        }
    }, []);

    const toggleNote = () => {
        setIsNoteOpen((prevState) => !prevState);
    };

    const handleNoteChange = (event) => {
        const content = event.target.value;
        setNoteContent(content);
        // Sauvegarder le contenu du bloc-note dans le stockage local
        localStorage.setItem("noteContent", content);
    };

    return (
        <div className={`notes-container ${isNoteOpen ? "open" : "closed"}`}>
            <button className="toggle-button" onClick={toggleNote}>
                {isNoteOpen ? "X" : <img src={test} alt="Toggle Note" className={"notes_image"}/>}
            </button>
            {isNoteOpen && (
                <div className="notes-content">
                    <textarea
                        placeholder="Ceci est votre fiche mémo, notez bien ce que vous voyez ..."
                        value={noteContent}
                        onChange={handleNoteChange}
                        rows="6"
                    />
                </div>
            )}
        </div>
    );
};

export default Notes;
