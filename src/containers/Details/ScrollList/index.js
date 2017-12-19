import React, {Component} from 'react'
export default class ScrollList extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.element) {
            nextProps.element.addEventListener('scroll', () => {
                alert(1)
                let {offsetHeight, scrollHeight, scrollTop} = nextProps.element
                console.log(nextProps.element)
                console.log(offsetHeight, scrollHeight, scrollTop);
            })
        }
    }

    render() {

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

