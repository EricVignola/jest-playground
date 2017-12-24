function orderTotal(items){
    items.reduce((sum, item) => {
        return sum + item.price;
    }, 0);
}

module.exports = orderTotal;
