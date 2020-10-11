import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    state = { 
            name:'',
            lastname:'',
            email:'',
            message:'',
            sent:false,
            buttonText: 'Send Message',
         }

    //handle input name
    handleName=(e) =>{
        this.setState({
            name: e.target.value
        })
    }
    //end of handle input name

    //handle input lastname
    handleLastname=(e) =>{
        this.setState({
            lastname: e.target.value
        })
    }
    //end of handle input lastname

    //handle input email
    handleEmail=(e) =>{
        this.setState({
            email: e.target.value
        })
    }
    //end of handle input email

    //handle input message
    handleMessage=(e) =>{
        this.setState({
            message: e.target.value
        })
    }
    //end of handle input message

    formSubmit=(e) => {
        e.preventDefault();

        let data={
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            message: this.state.message
        }
        axios.post('api/forma', data)
        .then(res=>{
            this.setState({
                sent:true,
            },this.resetForm())
        })
        .catch(()=>{
            console.log('message not sent');
        })
    }

    //for reseting initial data
        resetForm=()=>{
            this.setState({
                name:'',
                lastname:'',
                email:'',
                message:''
            })
            setTimeout(()=>{
                this.setState({
                    sent:false,
                })
            },3000)
        }



    render() { 
        return ( 
            <div className="container">
                <form onSubmit={this.formSubmit}>
                    {/* Start name */}
                    <div className="singleItem">
                        <label htmlFor="name">Imię</label>
                        <input type="text" 
                        name="name" 
                        className="name" 
                        placeholder="Twoje imie..."
                        value={this.state.name}    
                        onChange={this.handleName}
                        >
                        </input>
                    </div>
                    {/* End name */}

                    {/* Start lastname */}
                    <div className="singleItem">
                        <label htmlFor="lastname">Naziwsko</label>
                        <input type="text" 
                        name="lastname" 
                        className="lastname" 
                        placeholder="Twoje nazwisko..."
                        value={this.state.lastname}    
                        onChange={this.handleLastname}
                        >
                        </input>
                    </div>
                    {/* End lastname */}

                    {/* Start email */}
                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                        name="email" 
                        className="email" 
                        placeholder="Twów email..."
                        value={this.state.email}    
                        onChange={this.handleEmail}
                        required
                        >
                        </input>
                    </div>
                    {/* End email */}

                    {/* Start message */}
                    <div className="textArea singleItem">
                        <label htmlFor="message">Wiadomość</label>
                        <textarea name="message" 
                        id="" 
                        cols="30" 
                        rows="5" 
                        placeholder="Wiadomość..."
                        value={this.state.message}    
                        onChange={this.handleMessage}
                        >
                        </textarea>
                    </div>
                    {/* End message */}

                    <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>Wiadomość została wysłana</div>

                    <div className="btn">
                        <button type="submit">Wyślij</button>
                    </div>
                </form>

            </div>
         );
    }
}
 
export default Form;