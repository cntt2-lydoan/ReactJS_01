import React, {Component} from 'react';
class NoiDung  extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('ComponentWillReceiveProps cua Noidung.js: '+nextProps.ten);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('ShouldComponentUpdat cua Noidung.js');
        return true;
      }
      componentWillUpdate(nextProps, nextState) {
        console.log('ComponentWillUpdate cua Noidung.js')
      }
      componentDidUpdate(prevProps, prevState) {
        console.log('ComponentDidUpdate cua Noidung.js')
      }
    
    render() {
        console.log("Render cua Noidung.js");
        return (
            <div>
                <h4>{this.props.ten}</h4>
            </div>
        );
    }
}
export default NoiDung;
