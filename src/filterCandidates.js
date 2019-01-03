function filterCandidateBySkill(candidates, skill) {
  var filteredCandidates = [];
    candidates.forEach(function(candidate) {
      if (candidate.skills.includes(skill)) {
        filteredCandidates.push(candidate);
      }
    })
  return filteredCandidates;
}
