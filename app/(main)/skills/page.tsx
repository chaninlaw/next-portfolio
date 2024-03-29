import { BestdayCard } from '@/components/skills/bestday-card'
import { DailyAverageCard } from '@/components/skills/daily-average-card'
import { LanguagesBar } from '@/components/skills/languages-bar'
import { TodayTimeSpentCard } from '@/components/skills/today-timespent-card'
import { TotalTimeSpentCard } from '@/components/skills/total-timespent-card'
import { WeedayBar } from '@/components/skills/weekday-bar'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'

export default function SkillsPage() {
	return (
		<section className='h-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]'>
			<div className='flex-1 space-y-4 p-8 pt-6'>
				<div className=''>
					<h2 className='text-3xl font-bold tracking-tight'>Skills</h2>
					<p className='text-xs uppercase text-muted-foreground'>
						Dashboard Summary
					</p>
				</div>
				<div className='flex space-x-2'>
					<Suspense fallback={<SkeletonCard />}>
						<TotalTimeSpentCard />
					</Suspense>
					<Suspense fallback={<SkeletonCard />}>
						<BestdayCard />
					</Suspense>
					<Suspense fallback={<SkeletonCard />}>
						<DailyAverageCard />
					</Suspense>
					<Suspense fallback={<SkeletonCard />}>
						<TodayTimeSpentCard />
					</Suspense>
				</div>
				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
					<div className='rounded-xl border bg-card border-stone-800 text-card-foreground shadow col-span-4'>
						<div className='flex flex-col space-y-1.5 p-6'>
							<h3 className='font-semibold leading-none tracking-tight'>
								Weekdays Overview
							</h3>
						</div>
						<div className='h-[500px] p-6 pt-0 pl-2'>
							<Suspense fallback={<SkeletonChart />}>
								<WeedayBar />
							</Suspense>
						</div>
					</div>
					<div className='rounded-xl border bg-card border-stone-800 text-card-foreground shadow col-span-3'>
						<div className='flex flex-col space-y-1.5 p-6'>
							<h3 className='font-semibold leading-none tracking-tight'>
								Recent Languages
							</h3>
							<p className='text-sm text-muted-foreground'>
								Top 10 languages by time spent
							</p>
						</div>
						<div className='h-[500px] p-6 pt-0 pl-2'>
							<Suspense fallback={<SkeletonChart />}>
								<LanguagesBar />
							</Suspense>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const SkeletonCard = () => {
	return (
		<Card className='flex-1 flex flex-col space-y-3 border-stone-800 p-4'>
			<Skeleton className='w-full rounded-xl' />
			<div className='space-y-2'>
				<div className='flex justify-between'>
					<Skeleton className='h-4 w-2/3' />
					<Skeleton className='h-4 w-4' />
				</div>
				<Skeleton className='h-4 w-1/3 mt-2' />
				<Skeleton className='h-4 w-2/3' />
			</div>
		</Card>
	)
}

const SkeletonChart = () => {
	return <Skeleton className='w-full h-full rounded-xl' />
}
