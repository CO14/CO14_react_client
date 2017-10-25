import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPeaks } from "../../actions/actions.account";
import PeakListItem from "../PeakListItem";

class Peaks extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchPeaks();
    }

    renderPeaks() {
        const { peaks } = this.props;
        return peaks.map(peak => (
            <PeakListItem key={peak.peak_id} peak={peak} />
        ));
    }

    render() {
        return <section className="container">{this.renderPeaks()}</section>;
    }
}

const mapStateToProps = state => {
    return {
        peaks: state.peaks.peaks
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchPeaks }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Peaks);
