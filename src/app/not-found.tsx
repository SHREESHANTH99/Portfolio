import Link from "next/link";

/**
 * 404 Not Found Page
 */
export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <div className="container-custom text-center">
                <h1 className="text-6xl sm:text-8xl font-bold text-[hsl(var(--color-text-tertiary))] mb-4">
                    404
                </h1>
                <p className="text-xl text-[hsl(var(--color-text-primary))] mb-2">
                    Page Not Found
                </p>
                <p className="text-[hsl(var(--color-text-secondary))] mb-8 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="btn-primary"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
