describe('FilterCandidates', function() {
  const newCandidates = [
    { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
    { name: "Mario", skills: ["Python", "AWS"] },
    { name: "Jacquline", skills: ["JavaScript", "Azure"] },
    { name: "Kathy", skills: ["JavaScript", "Java"] },
    { name: "Anna", skills: ["JavaScript", "AWS"] },
    { name: "Matt", skills: ["PHP", "AWS"] },
    { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
  ];

  it('whose skill includes JavaScript', function() {
    expect(filterCandidateBySkill(newCandidates, "JavaScript")).toEqual([
      { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
      { name: "Jacquline", skills: ["JavaScript", "Azure"] },
      { name: "Kathy", skills: ["JavaScript", "Java"] },
      { name: "Anna", skills: ["JavaScript", "AWS"] },
    ]);
  });

  it('whose skill includes AWS', function() {
    expect(filterCandidateBySkill(newCandidates, "AWS")).toEqual([
      { name: "Mario", skills: ["Python", "AWS"] },
      { name: "Anna", skills: ["JavaScript", "AWS"] },
      { name: "Matt", skills: ["PHP", "AWS"] },
    ]);
  });
});
