# Homebrew formula for @sebastienrousseau/python-config.
#
# A library rather than a CLI, so this is only useful to someone who wants the
# preset available outside a project's node_modules. `npm install` remains the
# supported path.
class PythonConfig < Formula
  desc "Shareable Python configuration providing standardized Ruff, Black, Flake8, and MyPy rules adhering to modern 2026 standards"
  homepage "https://github.com/sebastienrousseau/python-config"
  url "https://registry.npmjs.org/@sebastienrousseau/python-config/-/python-config-0.0.7.tgz"
  license any_of: ["Apache-2.0", "MIT"]

  depends_on "node"

  def install
    system "npm", "install", *std_npm_args
  end

  test do
    output = shell_output("#{Formula["node"].opt_bin}/node -e " \
      "'console.log(typeof require(\"#{libexec}/lib/node_modules/@sebastienrousseau/python-config\"))'")
    assert_equal "object", output.strip
  end
end
