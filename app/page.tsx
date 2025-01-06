import Link from "next/link";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Life Tracker</h1>
      <div className="space-y-4">
        {/* Health Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Health</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/health/fitness"
                className="text-blue-500 hover:underline"
              >
                Fitness
              </Link>
            </li>
            <li>
              <Link
                href="/health/sleep"
                className="text-blue-500 hover:underline"
              >
                Sleep
              </Link>
            </li>
            <li>
              <Link
                href="/health/nutrition"
                className="text-blue-500 hover:underline"
              >
                Nutrition
              </Link>
            </li>
            <li>
              <Link
                href="/health/weight-management"
                className="text-blue-500 hover:underline"
              >
                Weight Management
              </Link>
            </li>
          </ul>
        </div>

        {/* Relationships Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Relationships</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/relationships/family"
                className="text-blue-500 hover:underline"
              >
                Family
              </Link>
            </li>
            <li>
              <Link
                href="/relationships/friendships"
                className="text-blue-500 hover:underline"
              >
                Friendships
              </Link>
            </li>
          </ul>
        </div>

        {/* Personal Growth Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Personal Growth</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/personal-growth/education"
                className="text-blue-500 hover:underline"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/personal-growth/hobbies"
                className="text-blue-500 hover:underline"
              >
                Hobbies
              </Link>
            </li>
            <li>
              <Link
                href="/personal-growth/self-reflection"
                className="text-blue-500 hover:underline"
              >
                Self-reflection
              </Link>
            </li>
          </ul>
        </div>

        {/* Career Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Career</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/career/job-performance"
                className="text-blue-500 hover:underline"
              >
                Job Performance
              </Link>
            </li>
            <li>
              <Link
                href="/career/skills-development"
                className="text-blue-500 hover:underline"
              >
                Skills Development
              </Link>
            </li>
            <li>
              <Link
                href="/career/networking"
                className="text-blue-500 hover:underline"
              >
                Networking
              </Link>
            </li>
          </ul>
        </div>

        {/* Finance Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Finance</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/finance/income"
                className="text-blue-500 hover:underline"
              >
                Income
              </Link>
            </li>
            <li>
              <Link
                href="/finance/expenses"
                className="text-blue-500 hover:underline"
              >
                Expenses
              </Link>
            </li>
            <li>
              <Link
                href="/finance/investments"
                className="text-blue-500 hover:underline"
              >
                Investments
              </Link>
            </li>
            <li>
              <Link
                href="/finance/savings-goals"
                className="text-blue-500 hover:underline"
              >
                Savings Goals
              </Link>
            </li>
          </ul>
        </div>

        {/* Time Management Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Time Management</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/time-management/productivity"
                className="text-blue-500 hover:underline"
              >
                Productivity
              </Link>
            </li>
            <li>
              <Link
                href="/time-management/goal-setting"
                className="text-blue-500 hover:underline"
              >
                Goal Setting
              </Link>
            </li>
            <li>
              <Link
                href="/time-management/prioritization"
                className="text-blue-500 hover:underline"
              >
                Prioritization
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
