import React from 'react';
import {
  AmazonwebservicesOriginalWordmark,
  AngularjsOriginal,
  AnsibleOriginal,
  BashOriginal,
  COriginal,
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  DartOriginal,
  DjangoPlainWordmark, DjangorestLineWordmark, DjangorestOriginal, DjangorestPlain, DjangorestPlainWordmark,
  DockerOriginalWordmark,
  DotnetcoreOriginal,
  DotNetOriginal,
  FastapiOriginal,
  FlaskOriginal,
  FlutterOriginal,
  GitlabOriginalWordmark,
  GooglecloudOriginal,
  GoOriginal,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  JenkinsOriginal,
  JqueryOriginalWordmark,
  KotlinOriginal,
  KubernetesOriginalWordmark,
  LaravelOriginal,
  MicrosoftsqlserverOriginalWordmark,
  MongodbOriginalWordmark,
  MysqlOriginalWordmark,
  NextjsOriginal,
  NodejsOriginal,
  PerlOriginal,
  PhpOriginal,
  PostgresqlOriginalWordmark,
  PrometheusOriginal,
  PythonOriginal,
  ReactOriginal,
  ReactOriginalWordmark,
  ROriginal,
  RubyOriginal,
  RustOriginal,
  SeleniumOriginal,
  SpringOriginal,
  SqlalchemyOriginalWordmark,
  SqliteOriginalWordmark,
  SwiftOriginal,
  SwiftOriginalWordmark,
  TailwindcssOriginal,
  TypescriptOriginal,
  VuejsOriginal,
} from "devicons-react";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {SiExpress} from "react-icons/si";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

interface Framework {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const allFrameworks: Framework[] = [
  {value: 'REACTJS', label: 'React.js', icon: <ReactOriginalWordmark size={35} color="slategrey"/>},
  {value: 'NODEJS', label: 'Node.js', icon: <NodejsOriginal size={35} color="slategrey"/>},
  {value: 'NEXTJS', label: 'Next.js', icon: <NextjsOriginal size={35} color="slategrey"/>},
  {value: 'PYTHON', label: 'Python', icon: <PythonOriginal size={35} color="slategrey"/>},
  {value: 'DJANGO', label: 'Django', icon: <DjangoPlainWordmark size={35} color="darkgreen"/>},
  {value: 'DJANGOREST', label: 'DjangoRestFramework', icon: <DjangorestPlain size={35} color="slategrey"/>},
  {value: 'FLASK', label: 'Flask', icon: <FlaskOriginal size={35} color="slategrey"/>},
  {value: 'FASTAPI', label: 'FastAPI', icon: <FastapiOriginal size={35} color="slategrey"/>},
  {value: 'ASPDOTNET', label: 'ASP.NET', icon: <DotNetOriginal size={35} color="slategrey"/>},
  {value: 'TYPESCRIPT', label: 'TypeScript', icon: <TypescriptOriginal size={35} color="slategrey"/>},
  {value: 'JAVASCRIPT', label: 'JavaScript', icon: <JavascriptOriginal size={35} color="slategrey"/>},
  {value: 'CPLUSPLUS', label: 'C++', icon: <CplusplusOriginal size={35} color="slategrey"/>},
  {value: 'CSHARP', label: 'C#', icon: <CsharpOriginal size={35} color="slategrey"/>},
  {value: 'RUST', label: 'Rust', icon: <RustOriginal size={35} color="slategrey"/>},
  {value: 'JAVA', label: 'Java', icon: <JavaOriginal size={35} color="slategrey"/>},
  {value: 'PHP', label: 'PHP', icon: <PhpOriginal size={35} color="slategrey"/>},
  {value: 'RUBY', label: 'Ruby', icon: <RubyOriginal size={35} color="slategrey"/>},
  {value: 'GOLANG', label: 'Go', icon: <GoOriginal size={35} color="slategrey"/>},
  {value: 'SWIFT', label: 'Swift', icon: <SwiftOriginal size={35} color="slategrey"/>},
  {value: 'KOTLIN', label: 'Kotlin', icon: <KotlinOriginal size={35} color="slategrey"/>},
  {value: 'DART', label: 'Dart', icon: <DartOriginal size={35} color="slategrey"/>},
  {value: 'ANGULAR', label: 'Angular', icon: <AngularjsOriginal size={35} color="slategrey"/>},
  {value: 'VUEJS', label: 'Vue.js', icon: <VuejsOriginal size={35} color="slategrey"/>},
  {value: 'DOTNET', label: '.NET', icon: <DotnetcoreOriginal size={35} color="slategrey"/>},
  {value: 'GITHUB', label: 'Github', icon: <GitHubLogoIcon color="slategrey"/>},
  {value: 'HTML', label: 'HTML5', icon: <Html5Original size={35} color="slategrey"/>},
  {value: 'CSS', label: 'CSS3', icon: <Css3Original size={35} color="slategrey"/>},
  {value: 'SQL', label: 'SQL', icon: <MicrosoftsqlserverOriginalWordmark size={35} color="slategrey"/>},
  {value: 'MYSQL', label: 'Mysql', icon: <MysqlOriginalWordmark size={35} color="slategrey"/>},
  {value: 'POSTGRESQL', label: 'Postgresql', icon: <PostgresqlOriginalWordmark size={35} color="slategrey"/>},
  {value: 'SQLITE', label: 'Sqlite', icon: <SqliteOriginalWordmark size={35} color="slategrey"/>},
  {value: 'SQLALCHEMY', label: 'Sqlalchemy', icon: <SqlalchemyOriginalWordmark size={35} color="slategrey"/>},
  {value: 'MONGODB', label: 'MongoDB', icon: <MongodbOriginalWordmark size={35} color="slategrey"/>},
  {value: 'C', label: 'C', icon: <COriginal size={35} color="slategrey"/>},
  {value: 'R', label: 'R', icon: <ROriginal size={35} color="slategrey"/>},
  {value: 'SWIFTUI', label: 'SwiftUi', icon: <SwiftOriginalWordmark size={35} color="slategrey"/>},
  {value: 'BASH', label: 'Bash', icon: <BashOriginal size={35} color="slategrey"/>},
  {value: 'PERL', label: 'Perl', icon: <PerlOriginal size={35} color="slategrey"/>},
  {value: 'JQUERY', label: 'JQuery', icon: <JqueryOriginalWordmark size={35} color="slategrey"/>},
  {value: 'SELENIUM', label: 'Selenium', icon: <SeleniumOriginal size={35} color="slategrey"/>},
  {value: 'DOCKER', label: 'Docker', icon: <DockerOriginalWordmark size={35} color="slategrey"/>},
  {value: 'KUBERNETES', label: 'Kubernetes', icon: <KubernetesOriginalWordmark size={35} color="slategrey"/>},
  {value: 'JENKINS', label: 'Jenkins', icon: <JenkinsOriginal size={35} color="slategrey"/>},
  {value: 'GITLAB', label: 'Gitlab', icon: <GitlabOriginalWordmark size={35} color="slategrey"/>},
  {value: 'ANSIBLE', label: 'Ansible', icon: <AnsibleOriginal size={35} color="slategrey"/>},
  {value: 'PROMETHEUS', label: 'Prometheus', icon: <PrometheusOriginal size={35} color="slategrey"/>},
  {value: 'AWS', label: 'AmazonWebServices', icon: <AmazonwebservicesOriginalWordmark size={35} color="slategrey"/>},
  {value: 'GOOGLECLOUD', label: 'GoogleCloud', icon: <GooglecloudOriginal size={35} color="slategrey"/>},
  {value: 'EXPRESSJS', label: 'ExpressJs', icon: <SiExpress size={35} color="gray"/>},
  {value: 'SPRINGBOOT', label: 'SpringBoot', icon: <SpringOriginal size={35} color="slategrey"/>},
  {value: 'LARAVEL', label: 'Laravel', icon: <LaravelOriginal size={35} color="slategrey"/>},
  {value: 'FLUTTER', label: 'Flutter', icon: <FlutterOriginal size={35} color="slategrey"/>},
  {value: 'REACTNATIVE', label: 'ReactNative', icon: <ReactOriginal size={35} color="slategrey"/>},
  {value: 'TAILWINDCSS', label: 'TailwindCss', icon: <TailwindcssOriginal size={35} color="slategrey"/>},
];

const renderSkills = (skills: { [key: string]: boolean }, size: number) => {
  let count = 0;
  return Object.entries(skills).map(([skill, value]) => {
    if (value === true && count < size) {
      count++;
      return (
          <div key={skill}>
            {allFrameworks.map((framework) => {
              if (framework.value === skill) {
                return (
                    <React.Fragment key={framework.value}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div
                                className="sm:w-12 sm:h-12 w-10 h-10  bg-muted overflow-hidden flex justify-center items-center rounded-md">
                              {framework.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-secondary text-foreground">
                            <div>{framework.label}</div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </React.Fragment>
                );
              }
              return null;
            })}
          </div>
      );
    }
    return null;
  });
};

const FrameworkIcons = ({skills, size}: { skills: { [key: string]: boolean }, size: number }) => {
  return (
      <div className="framework-list">
        <div className="flex gap-3 flex-wrap">
          {renderSkills(skills, size)}
        </div>
      </div>
  );
};

export default FrameworkIcons;