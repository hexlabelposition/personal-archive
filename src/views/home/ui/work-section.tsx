"use client";

import { SectionHeading } from "@shared/ui";
import { Tabs } from "@base-ui/react/tabs";
import { projects } from "../config/projects";
import { ProjectPreview } from "./project-preview";

export function WorkSection() {
  return (
    <section
      id="work"
      className="container flex scroll-mt-16 flex-col gap-[clamp(34px,6vh,72px)] pt-[clamp(64px,11vh,132px)] pb-[clamp(48px,8vh,96px)]"
    >
      <SectionHeading
        index="01"
        title="WORK"
        meta={`${String(projects.length).padStart(2, "0")} ENTRIES`}
        size="lg"
      />

      <Tabs.Root
        defaultValue={projects[0]?.id}
        orientation="vertical"
        className="grid items-start gap-[clamp(28px,4vw,64px)] lg:grid-cols-[minmax(0,1fr)_320px]"
      >
        <Tabs.List
          aria-label="Selected projects"
          activateOnFocus
          className="border-border min-w-0 border-t"
        >
          {projects.map((project) => (
            <Tabs.Tab
              key={project.id}
              value={project.id}
              className="border-border hover:bg-card data-active:bg-card data-active:shadow-primary focus-visible:outline-primary group flex w-full cursor-pointer flex-wrap items-baseline gap-x-7 gap-y-3 border-b px-4 py-[clamp(20px,3vh,34px)] text-left transition-[background-color,color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:-outline-offset-2 data-active:shadow-[inset_2px_0_0_0]"
            >
              <span className="text-muted-foreground w-14 flex-none font-mono text-xs tracking-widest">
                {project.id}
              </span>

              <span className="flex min-w-0 flex-[1_1_240px] flex-col gap-2">
                <span className="font-display group-data-active:text-primary text-xl leading-[1.05] font-normal tracking-wide transition-colors duration-300 lg:text-2xl">
                  {project.name}
                </span>
                <span className="text-muted-foreground text-sm tracking-wide text-pretty">
                  {project.descriptor}
                </span>
              </span>

              <span className="text-muted-foreground tracking-extra-wide ml-auto flex min-w-0 flex-wrap items-baseline justify-end gap-x-5 gap-y-2 font-mono text-xs uppercase">
                <span>{project.discipline}</span>
                <span>{project.year}</span>
                <span className="border-border text-2xs tracking-ultra-wide border px-2 py-1">
                  {project.state}
                </span>
              </span>
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <div className="min-w-0 lg:sticky lg:top-24">
          {projects.map((project) => (
            <Tabs.Panel
              key={project.id}
              value={project.id}
              className="focus-visible:outline-primary transition-[opacity,transform] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 data-starting-style:translate-y-2 data-starting-style:opacity-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <ProjectPreview project={project} />
            </Tabs.Panel>
          ))}
        </div>
      </Tabs.Root>
    </section>
  );
}
