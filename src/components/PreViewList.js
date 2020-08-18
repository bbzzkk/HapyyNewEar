import React, { Component } from 'react';
import PreViewListItem from './PreViewListItem';
import { PreViewListWrapper } from '../styles/PreViewLayout';

class PreViewList extends Component {
    render() {
        const { items, OnitemClick, itemjson} = this.props;
        const prevItems = items.filter(tmp => tmp.id < 5);
        const previewItems = prevItems.map((preitems) => {
            return (
                <PreViewListWrapper>
                    <PreViewListItem img={preitems.imageUrl}
                        name={preitems.name}
                        price={preitems.price}
                        id={preitems.id}
                        OnitemClick={OnitemClick}
                        itemjson = {itemjson}
                    >
                    </PreViewListItem>
                </PreViewListWrapper>
            );
        });

        return (
            previewItems
        );
    }
}

export default PreViewList;