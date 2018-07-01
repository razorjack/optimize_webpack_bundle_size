import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import moment from "moment";

export default function MatchResults({ date, teamScores }) {
  const relativeDateDescription = moment(new Date(date)).fromNow();
  const winningTeam = _.maxBy(teamScores, t => t.score);

  return (
    <p>
      {winningTeam.name} won the match {relativeDateDescription}, scoring {winningTeam.score} frags.
    </p>
  );
}

MatchResults.propTypes = {
  date: PropTypes.string.isRequired,
  teamScores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    })
  ).isRequired
};
