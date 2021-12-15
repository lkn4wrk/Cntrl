import { FeeHistoryBlock } from '../fetchBlockFeeHistory';
/**
 * Given a collection of blocks, returns an indicator of whether the base fee is moving up, down, or
 * holding steady, based on comparing the last base fee in the collection to the first.
 *
 * @param blocks - A set of blocks obtained via {@link BlockFeeHistoryDatasetFetcher}.
 * @returns The indicator ("up", "down", or "level").
 */
export default function calculateBaseFeeTrend<Percentile extends number>(blocks: FeeHistoryBlock<Percentile>[]): "down" | "up" | "level";