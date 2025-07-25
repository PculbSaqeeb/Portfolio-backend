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
    logo: Schema.Attribute.Media<'images' | 'files'>;
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

export interface ProjectProjectStats extends Struct.ComponentSchema {
  collectionName: 'components_project_project_stats';
  info: {
    displayName: 'projectStats';
  };
  attributes: {
    experience: Schema.Attribute.Integer;
    label: Schema.Attribute.String;
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
    link: Schema.Attribute.Component<'link.links', true>;
    liveLink: Schema.Attribute.String;
    mockupsVideo: Schema.Attribute.Component<'web.web-project-video', true>;
    name: Schema.Attribute.Text & Schema.Attribute.Required;
    problem: Schema.Attribute.Component<'problem.problem', true>;
    projectImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    solution: Schema.Attribute.Component<'solution.solution', true>;
    tag: Schema.Attribute.String;
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

export interface TagsTags extends Struct.ComponentSchema {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag: Schema.Attribute.String;
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

export interface WebWebProjectVideo extends Struct.ComponentSchema {
  collectionName: 'components_web_web_project_videos';
  info: {
    displayName: 'webProjectVideo';
  };
  attributes: {
    iosMockupVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    isIos: Schema.Attribute.Boolean;
    isLaptop: Schema.Attribute.Boolean;
    isMobile: Schema.Attribute.Boolean;
    isTablet: Schema.Attribute.Boolean;
    laptopMockupVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileMockupVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    tabletMockupVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
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
      'project.project-stats': ProjectProjectStats;
      'project.projects': ProjectProjects;
      'recommendation.recommendations': RecommendationRecommendations;
      'skill-breakdown.skill-breakdown': SkillBreakdownSkillBreakdown;
      'skill.skills': SkillSkills;
      'skills.skills': SkillsSkills;
      'social-links.social-links': SocialLinksSocialLinks;
      'solution.solution': SolutionSolution;
      'stats.stats': StatsStats;
      'tags.tags': TagsTags;
      'tech-stack.tech-stack': TechStackTechStack;
      'tech.tech': TechTech;
      'web.web-project-video': WebWebProjectVideo;
    }
  }
}
