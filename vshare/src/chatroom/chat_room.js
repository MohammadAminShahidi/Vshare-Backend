import React, { Component } from 'react'
import './chat_room.css'
import $ from 'jquery';
import Websocket from 'react-websocket';
import Home from './home.png'
import ReactPlayer from 'react-player'
import { object } from 'prop-types';
var ass=0;
class chat_room extends Component {
 
    componentDidMount() {
        if (window.localStorage.getItem('token') == null) {

            alert("Login first !");

            window.location.replace("/login/");

        }
        var id_gp = window.localStorage.getItem('id_gp');
        id_gp = "test";
        //This will open the connection*
        var ws = new WebSocket("ws://127.0.0.1:8000/stream/groups/" + id_gp + "/?token=" + localStorage.getItem('token') + "");
        ws.onopen = function () {
            console.log("Ping");
        };
   
        const { id } = this.props.match.params
        $(document).ready(function () {
            if (ass == 1) {
                console.log("shoeeeeeeeee")
                $("#movie").fadeIn();
            }

            // if (localStorage.getItem('token') == null) {
            //     alert("Login please !");
            //     window.location.replace("/login/");
            // }
        
                var id = window.localStorage.getItem('id_gp');
            var settings = {
                "url": "http://127.0.0.1:8000/groups/" + id_gp + '/',
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        //'X-CSRFToken': csrftoken,
                        //  "Authorization": "token " + token,
                        "accept": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Content-Type": "application/json"
                    }
                };

                $.ajax(settings).done(function (response) {
                    console.log("111111")
                    console.log(response)
                    for (var i = 0; i < response.members.length; i++) {
                        var hoverout = 'onMouseOut="this.style.color=';
                        var hoverrout = hoverout + "'white'";
                        var htmlcode = '';
                        var hover = 'onMouseOver="this.style.color=';
                        var hoverr = hover + "'red'";

                        htmlcode += '<p class="mygroups" id=' + '"c' + i + '"' + hoverr + '"' + hoverrout + '"' + '>' + response.members[i] + ' - </p>';
                        $(".textarea_member").append(htmlcode);
                      
                        console.log("2")
                        //$(".textarea_member").append(response.members[i] + "\n")

                    }
                    $(".textarea_bio").append(response.describtion + "\n")
                    $(".name").append(response.title);
                });
        });


        //Log the messages that are returned from the server
     
    }
   
    constructor(props) {
        super(props)
        this.state = {
            marhale:0,
            file_select: null,
            file_show_when_click: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            file_select: URL.createObjectURL(event.target.files[0])
        })
    }
    handleSubmit(e) {
    
        this.setState({
            file_show_when_click: this.state.file_select
        })
        console.log("onchange")
        document.getElementById('movie').style.display = 'block';
    }
  
    render() {
        
        
      //  const url = URL.createObjectURL(ass)
        return (
            <div>
                
                <form className="back">
                    <header class="header_s">
                        <div className="div_center">
                           

                            <div className="div_icon" ><a href='../homepage'><img src={Home} className="icon" /></a></div>
                            <div className="name"/>
                        </div>
                    </header>
                    <div className="formback_movie">
                        <input type="file" onChange={this.handleChange} />
                        <div onClick={this.handleSubmit}>Play</div>

                        <ReactPlayer id="movie" className="video" url={this.state.file_show_when_click} playing />
                </div>
                <div className="back_coulom">

                    <div className="formback_info" style={{ width: '115%', height: '410px' }}>
                        <legend className="title_gp">info of group</legend>
                        <div className="textarea_member" style={{ overflowY: 'scroll' }} />
                        <div className="textarea_bio" />
                    </div>
                    <div className="formback_text" style={{ width: '115%', height: '410px', }} >


                    </div>


                </div>
               
                 
                </form>
            </div>
            )
    }
}
export default chat_room;
