import OpenAI from "openai"
import { useState } from "react"
import {ColorRing} from "react-loader-spinner"
import "./ChatAI.css"
import Navbar from "../../components/Navbar/Index"
import Footer from "../../components/Footer"


const ChatAI = () => {
    const [command, setCommand] = useState('') // state input user
    const [loading, setLoading] = useState(false) // state loader nunggu resposn
    const [result, setResult] = useState([]) // menyimpan respone
    const [image, setImage] = useState("");

    const openai =  new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_KEY,
        dangerouslyAllowBrowser: true  
    });

   

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const res = await openai.chat.completions.create({
            messages: [{ role: "system", content: "Tata cara merawat sepatu adalah langkah-langkah penting untuk memastikan sepatu Anda tetap dalam kondisi baik. Berikut adalah beberapa panduan yang dapat Anda ikuti 1. Bersihkan sepatu secara teratur dengan sikat lembut dan air hangat untuk menghilangkan debu dan kotoran. 2. Hindari mencuci sepatu kulit secara berlebihan, gunakan pelumas kulit untuk menjaga kelembaban dan kilapnya. 3. Untuk sepatu olahraga atau sepatu kanvas, cuci tali sepatu dan insole secara terpisah"}]+command,
            model: "gpt-3.5-turbo",
            //max_tokens: 7,
            // temperature: 0,
            // presence_penalty: 0.0,
            // frequency_penalty: 0.0,
            // top_p: 1.0
        })
        setResult(res.choices)
        console.log('result ', res);
        setLoading(false)
    }

    // const handleGenerateImage = async (e) => {
    //     e.preventDefault();
    //     setLoading(true)
    //     const img = await openai.images.generate({ prompt: command });
    //     console.log(img.data[0].url)
    //     setImage(img.data[0].url);
    //     // console.log(result)
    //     setLoading(false)
    //   };
    

    // const handleSubmit = async (e) =>{
    //     e.preventDefault()

    //     setLoading(true)
    //     const res = await openai.completions.create({
    //         // prompt: command,
    //         prompt : "A summarizing article from this url : " + command,
    //         model: 'text-davinci-003',
    //         // message: [{ role: "system", content: command}],
    //         // model: "gpt-3.5-turbo",
    //         max_tokens: 7,
    //         temperature: 0,
    //         presence_penalty: 0.0,
    //         frequency_penalty: 0.0,
    //         top_p: 1.0
    //     })
    //     setResult(res.choices[0].message.content)
    //     console.log('result ', res);
    //     setLoading(false)
    // }
    

    return(
        <section className="ChatAIContent">
            <Navbar />
                <div id="kotakChatAI">
                    <div id="kotak-content">
                        <div id="kotak-title">
                            <h4>Chat AI</h4>
                        </div>
                        <table align="center">
                            <label>
                                    <div class="form-floating">
                                    <textarea className="form-control" placeholder="Tanyakan Apasaja Seputar Londry Sepatu" id="command" name="command" value={command}
                                    onChange={(e) => setCommand(e.target.value)}
                                    style={{ width: "600px", height: "100px" }}>
                                    </textarea>
                                    <label for="floatingTextarea">ChatAI</label>
                                    <br></br>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={(e) => handleSubmit(e)}
                                        >
                                        Submit
                                    </button>

                                    <h4>Jawaban : </h4>

                                    {/* <button type="submit" className="btn btn-warning" onClick={(e) => handleGenerateImage(e)}>
                                    Generate Image
                                    </button> */}
                                    {
                                        loading ? (
                                            <ColorRing
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={['#e15b64', '#f476e60', '#f8b26a', '#abbd81', '#849b87']}
                                            /> 
                                            ) : (
                                                <div>
                                                    {result.length > 0 ? result?.map((item, index) => (
                                                        <div key={index}>
                                                            <p>{item.message.content}</p>
                                                        </div>
                                                    )) : <div></div>}
                                                    {/* <img src={image} width={250} alt="" /> */}
                                                </div>
                                            )
                                    }

                                    </div>
                                    
                            </label>
                        </table>
                    </div>
                </div>
        </section>
    )
}

export default ChatAI