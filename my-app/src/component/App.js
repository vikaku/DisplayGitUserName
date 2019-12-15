import React from 'react';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url:[]
        }
    }

  componentDidMount(){
    fetch('https://api.github.com/search/users?q=location:Bangalore')
      .then(res=>res.json())
      .then((data) =>{
        console.log(data);
        this.setState({url:data})
      })
  }



    render(){
        console.log(this.state.url);
        return (
            <div>
                {this.state.url.items && this.state.url.items.map((login,key) =>(

                    <div>
                        
                           
                             <div>GitUserLink:<a href={login.html_url} target="_blank">{login.login}</a></div>
                              <div>Id:{login.id}</div>
                              <div>Type:{login.type}</div>
                              <div>SiteAdmin{login.site_admin}</div>
                              <div>Score:{login.score}</div>
                              
                              <br/>
                        
                    </div>
                )

            ) }
            </div>
        )
       
       

    }

  
}

export default App;
