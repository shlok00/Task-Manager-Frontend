import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function TriggerOutlook()

    {

        var body = escape(window.document.title + String.fromCharCode(13));

        var subject = "DO SEND US YOUR FEED BACK!";
        window.location.href = "mailto:a.habitable_team@yahoo.com?body="+body+"&subject="+subject;

            }

  class Feed extends React.Component{
   render(){
     return(
       <div>
       <title>Email TO HabitAble SUPPORT TEAM</title>
 <form id="form1" runat="server">
   <div>
     <a href="#" onclick="TriggerOutlook()">Email this Codesnippet</a>
   </div>
 </form>
       </div>
     )
   }

  }

  export default Feed
