import React, { Component } from 'react';
import Chart from 'chart.js';
import '../styles/Habit.css';
import axios from 'axios';

var token = localStorage.getItem('token');
const tkx = JSON.parse(token);
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.scale.ticks.beginAtZero = true;
var color=['#a772ba', '#099ae3', '#ed79d8', '#60cc86','#cf7336', '#d6e060', '#bf6370','#a772ba', '#099ae3', '#ed79d8', '#60cc86','#cf7336', '#d6e060', '#bf6370','#a772ba', '#099ae3', '#ed79d8', '#60cc86','#cf7336', '#d6e060', '#bf6370'];
var icount = 1;
var habitvalue='';


// BarChart
class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.label);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'horizontalBar',
      options: {
      maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 10
              }
            }
          ]
        }
      },
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.value),
          backgroundColor: this.props.color,
          barThickness: 6,
        }]
      }
    });
  }

  render() {
    return (
        <canvas ref={this.canvasRef} />
    );
  }
}



// Doughnut
class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.label);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'pie',
      options: {
        legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: 'white'
                }},
      maintainAspectRatio: false
      },
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [{
          data: this.props.data.map(d => d.value),
          backgroundColor: this.props.colors,
          borderColor: '#0c1926',
          borderWidth: 3
        }]
      }
    });

  }


  render() {
    return <canvas ref={this.canvasRef} />;
  }
}


// App
class Habit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{title:'habit', data: [{label:'', value:0, id:'', color:''}]}]
    };
  }

  componentDidMount() {
    const mai = document.querySelector("main");

    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var monthLabel = document.getElementsByClassName('month-label')[0].innerHTML = monthNames[date.getMonth()];

    var dayLabel = document.getElementsByClassName("day-label")[0].innerHTML = day;

    var weekdayLabel = document.getElementsByClassName("weekday-label")[0].innerHTML = dayNames[date.getDay(0)];
    const ce = {accessToken: tkx.accessToken};

    axios.post('/habits',ce).then(response=>{console.log(response.data);
      var data = response.data;
      var x = this.state.data[0].data;
      for(var i =0; i<data.length; i++)
      {
        x.push({ label: data[i].title,
               value: data[i].streak, id: data[i]._id, color: data[i].color});
         this.setState({
     data: [{title:'habit', data:x}]});
     document.getElementById('habstreak').append(new Option(`${data[i].title}`, `${data[i].title}`));
     document.getElementById('delhabstreak').append(new Option(`${data[i].title}`, `${data[i].title}`));
     document.getElementById('delhab').append(new Option(`${data[i].title}`, `${data[i].title}`));
      }
}).catch(error=>{console.log(error.data)});

  mai.addEventListener("click", (e) => {

  if (e.target.tagName === "BUTTON") {
    const { name } = e.target.dataset;
    if (name === "add-bt") {
      console.log('caught!');
      document.getElementById('habstreak').append(new Option(`${habitvalue}`, `${habitvalue}`));
      document.getElementById('delhabstreak').append(new Option(`${habitvalue}`, `${habitvalue}`));
      document.getElementById('delhab').append(new Option(`${habitvalue}`, `${habitvalue}`));
      var x = this.state.data[0].data;
      var id ='';
      console.log(x);
      const datahabit = {
         habit: {
           title: habitvalue,
                   description: '',
                   completedToday: false,
                   streak: 0,
                   color: color[icount]
      },
       accessToken: tkx.accessToken
      };
            axios.post(`/habit`,datahabit).then(response=>{ console.log(response.data); id = response.data._id; console.log(id);   x.push({ label: habitvalue,
                    value: 0, id: id, color: color[icount]});
              this.setState({
          data: [{title:'habit', data:x}]
        }); alert("success!");}).catch(e=>{alert("err!");});

      console.log(this.state.data[0].data);
      const hablis = mai.querySelector('[data-name="hab-input"]');
        hablis.value = "";
        icount++;
      }

      else if(name === "upd-btn")
      {
         var tag = document.getElementById('habstreak').value;
         console.log(tag);
         var numt =0;
         var ds = this.state.data[0].data;
         var id ='';
         var col = '';
         for( var i =0; i<ds.length; i++)
         {
           if(ds[i].label == tag)
            {ds[i].value = ds[i].value + 1; numt = ds[i].value; id = ds[i].id; col = ds[i].color; console.log(id);}
       }

             const datahabit = {
                habit: {
                          title: tag,
                          description: '',
                          completedToday: true,
                          streak: numt,
                          color: col
             },
              accessToken: tkx.accessToken
             };
                   axios.patch(`/habit/${id}`,datahabit).then(response=>{ console.log(response.data);       this.setState({
                      data: [{title:'habit', data: ds}]
                    });
alert("success!");}).catch(e=>{alert("err!");});

}
      else if(name === "delh-btn")
      {
         var tag = document.getElementById('delhabstreak').value;
         console.log(tag);
         var ds = this.state.data[0].data;
         var numt=0;
         var id ='';
         var col = '';
         for( var i =0; i<ds.length; i++)
         {
           if(ds[i].label == tag)
            {ds[i].value = ds[i].value - 1;  numt = ds[i].value; id = ds[i].id; col = ds[i].color; console.log(id);}
       }
       const datahabit = {
          habit: {
                    title: tag,
                    description: '',
                    completedToday: false,
                    streak: numt,
                    color: col
       },
        accessToken: tkx.accessToken
       };
             axios.patch(`/habit/${id}`,datahabit).then(response=>{ console.log(response.data);       this.setState({
                data: [{title:'habit', data: ds}]
              });
 alert("success!");}).catch(e=>{alert("err!");});
      }

      else if(name === "del-btn")
      {
         var tag = document.getElementById('delhab').value;
         console.log(tag);
         var ds = this.state.data[0].data;
         var id='';
         for( var i =0; i<ds.length; i++)
         {
           if(ds[i].label == tag)
            { console.log(ds[i])
              const ce = {accessToken: tkx.accessToken};
              id = ds[i].id;
              axios.patch(`/habit/delete/${id}`,ce).then(response=>{alert("success");}).catch(error=>{alert("ERROR!");});
              ds.splice(i, 1);
              var b = document.getElementById("habstreak");
              var c= b.selectedIndex;
              b.options[c].remove();
              var b = document.getElementById("delhabstreak");
              b.options[c].remove();
              var b = document.getElementById("delhab");
              b.options[c].remove();
            }
       }

       this.setState({
   data: [{title:'habit', data: ds}]
 });
      }

    }
}

);

  }

  render() {
    return (
      <div>
      <link
rel="stylesheet"
href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
crossorigin="anonymous"/>
<main>
      <div className="inputsblock">
      <br/><br/><br/>

            <div className="calendar-wrapper">
  <div className="calendar-today">
  <div className="month-label"></div>
  <div className="day-label"></div>
  <div className="weekday-label"></div>

      <div className="current-time"></div>
  </div>

    </div>
    <div className="input-group" style={{maxWidth:"350px", marginLeft: "20px", marginTop: "120px", position: "fixed"}}>
          <div className="input-group-prepend">
          <br/><br/><br/><br/>
              <span className="input-group-text"  style={{background: "#60397d", color: "white", borderColor: "transparent", height: "38px", width:"125px" }}>New Habit: </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="What will you do today?"
              data-name="hab-input"
              onChange = {event => {habitvalue = event.target.value; console.log(habitvalue);}}
              style={{border:"3.5px solid #60397d"}}

            />
            <div className="input-group-append">
              <button className="btn btn-success" data-name="add-bt" style={{background: "#60397d", height: "38px", border: "1px solid #60397d", marginTop:"-96px", marginLeft:"350px"}}>
                Add
              </button>
            </div>
          </div>
      <div className="input-group" style={{maxWidth:"350px", marginLeft: "20px", marginTop: "180px", position: "fixed"}}>
            <div className="input-group-prepend">
            <br/><br/><br/><br/>
              <span className="input-group-text"  style={{background: "#ba3c5d", color: "white", borderColor: "transparent", height: "38px", width:"125px" }}>Habit Streak! </span>
            </div>
            <select
              className="form-control"
              id="habstreak"
              style={{border:"3.5px solid #ba3c5d"}}
              >

              </select>
            <div className="input-group-append">
              <button className="btn btn-success" data-name="upd-btn" style={{background: "#ba3c5d", height: "38px", border: "1px solid #ba3c5d", marginTop:"-96px", marginLeft:"350px"}}>
                Add
              </button>
            </div>
          </div>
          <div className="input-group" style={{maxWidth:"350px", marginLeft: "20px", marginTop: "240px", position: "fixed"}}>
                <div className="input-group-prepend">
                <br/><br/><br/><br/>
                  <span className="input-group-text"  style={{background: "#cf59ad", color: "white", borderColor: "transparent", height: "38px", }}>Delete Streak! </span>
                </div>
                <select
                  className="form-control"
                  id="delhabstreak"
                  style={{border:"3.5px solid #cf59ad"}}
                     >
                  </select>
                <div className="input-group-append">
                  <button className="btn btn-success" data-name="delh-btn" style={{background: "#cf59ad", height: "38px", border: "1px solid #cf59ad", marginTop:"-96px", marginLeft:"350px"}}>
                    Delete
                  </button>
                </div>
              </div>
          <div className="input-group" style={{maxWidth:"350px", marginLeft: "20px", marginTop: "300px", position: "fixed"}}>
                <div className="input-group-prepend">
                <br/><br/><br/><br/>
                  <span className="input-group-text"  style={{background: "#494ea3", color: "white", borderColor: "transparent", height: "38px", width:"125px" }}>Delete Habit: </span>
                </div>
                <select
                  className="form-control"
                  id="delhab"
                  style={{border:"3.5px solid #494ea3"}}

                  >
                  </select>
                <div className="input-group-append">
                  <button className="btn btn-success" data-name="del-btn" style={{background: "#494ea3", height: "38px", border: "1px solid #494ea3", marginTop:"-96px", marginLeft:"350px"}}>
                    Delete
                  </button>
                </div>
              </div>
      </div>
      <div className="Canv">
        <div className="chartblock" style={{height: "270px", width:"500px", marginLeft:"51%",marginTop:"-25px",border: "1px solid #68b8cc", background:"#0c1926"}}>
          <BarChart
            data={this.state.data[0].data}
            title={this.state.data[0].title}
            color={['#a772ba', '#099ae3', '#ed79d8', '#60cc86','#cf7336', '#d6e060', '#bf6370','#a772ba', '#099ae3', '#ed79d8', '#60cc86','#cf7336', '#d6e060', '#bf6370','#a772ba', '#099ae3', '#ed79d8', '#60cc86','#cf7336', '#d6e060', '#bf6370']}
          />
        </div>
        <div className="chartblock" style={{height: "260px", width:"500px", marginLeft:"51%", marginTop:"20px",border: "1px solid #68b8cc", padding:"20px",
        background:"#0c1926"
}}>
          <PieChart
            data={this.state.data[0].data}
            title={this.state.data[0].title}
            colors={['#a772ba', '#099ae3', '#ed79d8', '#60cc86','#cf7336', '#d6e060', '#bf6370','#a772ba', '#099ae3', '#ed79d8', '#60cc86','#cf7336', '#d6e060', '#bf6370','#a772ba', '#099ae3', '#ed79d8', '#60cc86','#cf7336', '#d6e060', '#bf6370']}
            style={{marginTop: "50px"}}
          />

        </div>
      </div>
      </main>
      </div>
    );
  }
}

export default Habit;
