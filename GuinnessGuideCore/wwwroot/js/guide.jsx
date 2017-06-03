/* http://tech.oyster.com/using-react-and-jquery-together/ */

import Select from 'react-select';



var SearchButton = React.createClass({

   

    render: function () {
        return (
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button">Search</button>
            </span>
        );
    }
});



var getOptions = function (input, callback) {
    setTimeout(function () {
        callback(null, {
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
            ],
            // CAREFUL! Only set this to true when there are no more options,
            // or more specific queries will not be sent to the server.
            complete: true
        });
    }, 500);
};

<Select.Async
    name="form-field-name"
    loadOptions={getOptions}
/>

var SearchInput = React.createClass({

    

    componentDidMount: function () {

        if (this.initComplete == false) {
            this.renderEasyComplete();
            this.initComplete = true;
        }
    },
    componentDidUpdate: function () {
        console.log("Update");
    },

    initComplete : false,

    options: {

      /*  url: "content/cities.json",*/

        data: ["Arendal", "Bergen", "Oslo", "Test"],

      /*  getValue: function (element) {
            return element.city;
        },*/
        
        list: {
            match: {
                enabled: true
            },
            maxNumberOfElements: 16
        },
        
        template: {
            type: "description",
            fields: {
                description: "country"
            }
        },
        theme: "round"
    },

    render: function () {
        
        console.log(this.options);
        console.log(this.props);
        return (
            <div className="input-group">
                <input ref={(input) => {this.searchInput = input; }}  type="text" className="form-control" placeholder="city / countri / pub / store..." />
                <SearchButton />
           </div>
        );
    },

    renderEasyComplete: function () {
/*        console.log(this.searchInput);
        console.log(EasyAutocomplete);
        console.log($(this.searchInput));*/
        $(this.searchInput).easyAutocomplete(this.options);

    }
});





ReactDOM.render(
/*    <SearchInput autocomplete={() => this.easyAutocomplete} />,                    */
    <SearchInput />,                    
    document.getElementById('content')
);