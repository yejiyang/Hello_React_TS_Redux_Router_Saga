import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import Grid from "@material-ui/core/Grid";
import Top from "../components/top";
import Left from "../components/left";
import SimpleBreadcrumbs from "../components/breadcrumb";
import { State } from "../reducers";
import { Dispatch } from "redux";
import { goToPage } from "../actions/global/index";
import { setLogout } from "../actions/login/index";
import styles from './index.module.css';

const mapStateToProps = (state: State) => ({
  isLogin: state.login.isLogin
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onGoToPage: () => dispatch(goToPage()),
  onSetLogout: () => dispatch(setLogout())
});

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;
interface LAutoGridNoWrapProps {
  children: any;
  isLogin: boolean;
  onGoToPage: () => void;
  onSetLogout: () => void;
}
class Layout extends React.PureComponent<
  RouteComponentProps<any> & LAutoGridNoWrapProps
>
// function Layout(props: RouteComponentProps<any> & LAutoGridNoWrapProps)

{
  componentDidMount() {
    const { onGoToPage, isLogin, history } = this.props;
    if (!isLogin) {
      history.push("/login");
    }
    onGoToPage();
  }
  render() {
    const { children, onSetLogout, isLogin } = this.props;
    return (
      <Grid container direction="column" wrap="nowrap">
        <Top onSetLogout={onSetLogout} isLogin={isLogin} />
        <Grid container wrap="nowrap">
          <Grid xs={2}>
            <Left />
          </Grid>
          <Grid xs={9} container direction="column">
            {/* <SimpleBreadcrumbs /> */}
            <Grid container direction="row">
              <div className={styles.wrap}>{children}</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
