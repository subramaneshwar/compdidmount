import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    // Fetch the list of items from an API
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data,
          loading: false,
        });
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const { items, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1 style={{textAlign:"center"}}>Item List</h1>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center",gap:"20px"}}>
          {items.map(item => (
            <div style={{height:"200px",width:"250px",display:"flex",flexDirection:"column",border:"solid 1px gray",padding:"10px",borderRadius:"5px" }}>

                <img src={item.image} alt="" style={{width:"full",height:"80%"}} />
                <li key={item.id}>{item.title}</li>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ItemList;
