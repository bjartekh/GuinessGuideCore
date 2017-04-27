/* http://tech.oyster.com/using-react-and-jquery-together/ */ 
var SearchButton = React.createClass({

   

    render: function () {
        return (
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button">Search</button>
            </span>
        );
    }
});

var SearchInput = React.createClass({

    componentDidMount: function () {
        this.renderEasyComplete();
    },
    componentDidUpdate: function () {
        this.renderEasyComplete();
    },

    options: {

        url: "content/cities.json",

        getValue: "name",

        list: {
            match: {
                enabled: true
            },
            maxNumberOfElements: 8
        },

        template: {
            type: "custom",
            method: function (value, item) {
                return "<span class='flag flag-" + (item.code).toLowerCase() + "' ></span>" + value;
            }
        },

        theme: "round"
    },

    render: function () {
        console.log(this.options);
        console.log(this.props);
        return (
            <div className="input-group">
                <input ref="ezycomplete" type="text" className="form-control" placeholder="city / country / pub / store..." />
                <SearchButton />
           </div>
        );
    },

    renderEasyComplete: function () {
        $(this.refs.ezycomplete).html(
            this.props.autocomplete(this.options)
        );
    }
});





ReactDOM.render(
    <SearchInput autocomplete={() => this.EasyAutocomplete} />,                    
    document.getElementById('content')
);