import { Delete } from '@material-ui/icons';
import React, {useState} from 'react'

export default function MainContext() {
    let [links, setLinks] = useState([]);
    let [inputtedLink, setInput] = useState('');

    const handleClick = (e) => {
        e.preventDefault()

        setLinks([...links, { url: inputtedLink, key: Date.now() }]);
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const onDelete = (link) => {
        let index = links.findIndex((element) => element.url == link.url)

        let newLinks = [];
        setLinks(newLinks.concat(links.slice(0, index), links.slice(index+1)))
    }

    return (
        <main className="flex justify-between container mx-auto">
            <section className="w-full lg:w-4/12">
                <input
                    onChange={handleChange} 
                    className="bg-purple-50 p-2 mr-px"
                    type="text" 
                    placeholder="Link"
                    />
                <button onClick={handleClick} className="p-3 bg-purple-200">Add Link</button>
            </section>
            <section className="lg:w-8/12">
                {
                    links.map((link, index) => 
                    <div className="flex items-center" key={index}>
                    <div 
                        className="text-white p-2 bg-purple-700">
                            { link.url }
                    </div>
                    <div>
                        <a href="#" onClick={() => onDelete(link)} className="p-2 bg-red-300">Delete</a>
                    </div>
                    </div>
                )}
            </section>
        </main>
    )
}