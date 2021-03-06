import React, { Component, Fragment } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Header from '../components/Header';
import MapContainer from './MapContainer';

class WrapperContainer extends Component {
    render() {
        const {
            actions,
            google,
            loaded,
            map,
            data
        } = this.props;

        return (
            <Fragment>
                <Header
                    showMenu={map.showMenu}
                    toggleMenu={actions.toggleMenu}
                />
                <MapContainer
                    data={data}
                    activeMarker={map.activeMarker}
                    addMarkers={actions.addMarkers}
                    allPoints={map.allPoints}
                    clearMarkers={actions.clearMarkers}
                    filter={map.filter}
                    google={google}
                    loaded={loaded}
                    markers={map.markers}
                    onItemClick={actions.onMarkerClick}
                    onMapClick={actions.onstateClick}
                    onMarkerClick={actions.onMarkerClick}
                    selectedPoint={map.selectedPoint}
                    showingInfoWindow={map.showingInfoWindow}
                    showingPoints={map.showingPoints}
                    showMenu={map.showMenu}
                    updateFilter={actions.updateFilter}
                />
                <footer
                    className="page-footer">
                    <p>
                        made with <i className="fa fa-heart"></i> by Qurat!
                    </p>
                </footer>
            </Fragment>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBZStOCwyFuatMYZcLNtRh25WNinn77Tw4'
})(WrapperContainer)