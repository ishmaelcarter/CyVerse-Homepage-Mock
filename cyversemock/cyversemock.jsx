

var CyverseMock = React.createClass({
	  render: function(){
  	return (
      <div className="Cyverse">
    	 <PageHeader />
        <NewUser  />
        <ForgotPassword />
        <ReturnUser />
      </div>
    );
  }
})

var PageHeader = React.createClass({
	render: function(){
		return(
			<div className="header">
			<h1 id="logo"><img src="logo.png"/></h1>
			<h2 id="trellis">Trellis: CyVerse User Management</h2>
			<p id="headerText">A centralized place for you to manage your CyVerse user profile and services</p>
			<input type="submit" value="Login"/>
			</div>
			);
	}
})

var NewUser = React.createClass({
	render: function(){
		return (
			<div className="NewUser">
				<div className="UserOptions">New User?</div>
				<div className="UserOptionsText">A centralized place for you to manage your CyVerse user profile and services.</div>
				<input type="submit" value="Register"/> 
			</div>
			);
	}
})

var ForgotPassword = React.createClass({
	render: function(){
		return (
			<div className="ForgotPassword">
				<div className="UserOptions">Forget your Password?</div>
				<div className="UserOptionsText">Click here if you have previously created a CyVerse user ID.</div>
				
				<input type="submit" value="Reset Password"/>
				
			</div>
			);
	}
})

var ReturnUser = React.createClass({
	render: function(){
		return (
			<div className="ReturnUser">
				<div className="UserOptions">Log in with:</div>
				<div className="UserOptionsText">Click here to reset your password.</div>
				<input type="submit" value="CyVerse Login"/>
			</div>
			);
	}
})

/*
<input type="submit" value="CyVerse Login"/>
var Contact = React.createClass({
	handleClick: function(){
		return(
			<form>
				<input type="text"/>
				<textarea cols="40" rows="5">

				</textarea>
				<input type="submit" value="Send Mail"/>
			</form>
			)
	}
}) */

ReactDOM.render(<CyverseMock/>, document.getElementById('CyverseMock'));