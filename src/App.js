import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./app/store";

//Assets
import classes from "./App.module.css";

//Components
import MenuDesktop from "./components/Menu/MenuDesktop";
import ListVoiceMail from "./components/ListVoiceMail/ListVoiceMail";
import api from "./api";

class App extends React.Component {

  state = {
    data: [],
  };

  fetchData = async () => {
    try {
      const data = await api.voicemails.listAllMessages();
      data.then(data => this.setState({data}));
    } catch (error) {
      console.log(error);
    }
  }

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<Provider store={store}>
				<div className={classes.container}>
					<BrowserRouter>
						<Grid container item xs={3}>
							<MenuDesktop />
						</Grid>
						<Grid container item xs={9}>
							<Switch>
								<Route exact path="/">
									<ListVoiceMail toLoad="all" voicemails={this.state.data} title="Dashboard" />
								</Route>
								<Route exact path="/new">
									<ListVoiceMail toLoad="new" title="Recibidos" />
								</Route>
								<Route exact path="/saved">
									<ListVoiceMail toLoad="saved" title="Guardados" />
								</Route>
								<Route exact path="/deleted">
									<ListVoiceMail toLoad="deleted" title="Eliminados" />
								</Route>
							</Switch>
						</Grid>
					</BrowserRouter>
				</div>
			</Provider>
		);
	}
}

export default App;
