"use client"

import { Timeline } from "@/components/ui/timeline"
import { useTranslation } from "react-i18next"

export default function LaEmpresaHistoria() {
  const { t } = useTranslation()
  const data = [
    {
      title: "2017",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            {t('company.history.2017')}
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            {t('company.history.2019')}
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            {t('company.history.2020')}
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            {t('company.history.2021')}
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            {t('company.history.2022')}
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            {t('company.history.2023')}
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            {t('company.history.2024')}
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            {t('company.history.2025')}
          </p>
        </div>
      ),
    },
    {
      title: "Hoy",
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            {t('company.history.today')}
          </p>
        </div>
      ),
    },
  ]

  return (
    <section 
      className="relative overflow-hidden w-full bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center pt-20 pb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1d3969] mb-6">
            {t('company.history.title')}
          </h2>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  )
}
