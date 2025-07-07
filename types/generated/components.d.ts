import type { Schema, Struct } from '@strapi/strapi';

export interface BioBio extends Struct.ComponentSchema {
  collectionName: 'components_bio_bios';
  info: {
    displayName: 'bio';
  };
  attributes: {};
}

export interface BioLongBio extends Struct.ComponentSchema {
  collectionName: 'components_bio_long_bios';
  info: {
    displayName: 'longBio';
  };
  attributes: {
    logo: Schema.Attribute.Blocks;
  };
}

export interface BioLongBioo extends Struct.ComponentSchema {
  collectionName: 'components_bio_long_bioos';
  info: {
    displayName: 'longBioo';
  };
  attributes: {
    longBio: Schema.Attribute.Blocks;
  };
}

export interface CgpaCgpa extends Struct.ComponentSchema {
  collectionName: 'components_cgpa_cgpas';
  info: {
    displayName: 'cgpa';
  };
  attributes: {};
}

export interface DetailsDetails extends Struct.ComponentSchema {
  collectionName: 'components_details_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
  };
  attributes: {
    cgpa: Schema.Attribute.Decimal & Schema.Attribute.Required;
    degree: Schema.Attribute.String & Schema.Attribute.Required;
    endDate: Schema.Attribute.Date;
    location: Schema.Attribute.Component<'location.location', false> &
      Schema.Attribute.Required;
    startDate: Schema.Attribute.Date;
    university: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LinkLinks extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    slogun: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LocationLocation extends Struct.ComponentSchema {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProblemProblem extends Struct.ComponentSchema {
  collectionName: 'components_problem_problems';
  info: {
    displayName: 'problem';
  };
  attributes: {
    problemDetail: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProflieProfile extends Struct.ComponentSchema {
  collectionName: 'components_proflie_profiles';
  info: {
    displayName: 'profile';
  };
  attributes: {
    profile: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectProjects extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    feature: Schema.Attribute.Component<'details.details', true> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files', true>;
    link: Schema.Attribute.Component<'link.links', true>;
    name: Schema.Attribute.Text & Schema.Attribute.Required;
    problem: Schema.Attribute.Component<'problem.problem', true>;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    solution: Schema.Attribute.Component<'solution.solution', true>;
    techStack: Schema.Attribute.Component<'tech-stack.tech-stack', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RecommendationRecommendations extends Struct.ComponentSchema {
  collectionName: 'components_recommendation_recommendations';
  info: {
    displayName: 'recommendations';
  };
  attributes: {
    caption: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profile: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
  };
}

export interface SkillBreakdownSkillBreakdown extends Struct.ComponentSchema {
  collectionName: 'components_skill_breakdown_skill_breakdowns';
  info: {
    displayName: 'skillBreakdown';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    tech: Schema.Attribute.Component<'tech.tech', true> &
      Schema.Attribute.Required;
  };
}

export interface SkillSkills extends Struct.ComponentSchema {
  collectionName: 'components_skill_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {};
}

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SolutionSolution extends Struct.ComponentSchema {
  collectionName: 'components_solution_solutions';
  info: {
    displayName: 'solution';
  };
  attributes: {
    impact: Schema.Attribute.String & Schema.Attribute.Required;
    solutionDetail: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StatsStats extends Struct.ComponentSchema {
  collectionName: 'components_stats_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    experience: Schema.Attribute.Integer & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TechStackTechStack extends Struct.ComponentSchema {
  collectionName: 'components_tech_stack_tech_stacks';
  info: {
    displayName: 'techStack';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TechTech extends Struct.ComponentSchema {
  collectionName: 'components_tech_teches';
  info: {
    displayName: 'tech';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
    proficiency: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bio.bio': BioBio;
      'bio.long-bio': BioLongBio;
      'bio.long-bioo': BioLongBioo;
      'cgpa.cgpa': CgpaCgpa;
      'details.details': DetailsDetails;
      'education.education': EducationEducation;
      'link.links': LinkLinks;
      'location.location': LocationLocation;
      'problem.problem': ProblemProblem;
      'proflie.profile': ProflieProfile;
      'project.projects': ProjectProjects;
      'recommendation.recommendations': RecommendationRecommendations;
      'skill-breakdown.skill-breakdown': SkillBreakdownSkillBreakdown;
      'skill.skills': SkillSkills;
      'skills.skills': SkillsSkills;
      'social-links.social-links': SocialLinksSocialLinks;
      'solution.solution': SolutionSolution;
      'stats.stats': StatsStats;
      'tech-stack.tech-stack': TechStackTechStack;
      'tech.tech': TechTech;
    }
  }
}
